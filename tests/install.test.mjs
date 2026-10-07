import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import assert from 'node:assert/strict';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixturesRoot = path.resolve(process.env.KEYSTONE_TEST_DIR || path.join(process.cwd(), 'work', 'keystone-install-tests'));
fs.mkdirSync(fixturesRoot, { recursive: true });
function fixture() {
  const root = fs.mkdtempSync(path.join(fixturesRoot, 'repo-'));
  execFileSync('git', ['init', '-q', root]);
  return root;
}
function run(root, ...args) {
  return spawnSync(process.execPath, [path.join(packageRoot, 'tools', 'install.mjs'), root, ...args], { encoding: 'utf8' });
}
function snapshots(root, prefix = '') {
  return Object.fromEntries(fs.readdirSync(root, { withFileTypes: true }).filter(entry => entry.name !== '.git').flatMap(entry => {
    const relative = path.join(prefix, entry.name);
    const full = path.join(root, entry.name);
    return entry.isDirectory() ? Object.entries(snapshots(full, relative)) : [[relative, fs.readFileSync(full).toString('base64')]];
  }));
}

test('preview makes no repository changes', () => {
  const root = fixture();
  const before = snapshots(root);
  const result = run(root);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Preview only/);
  assert.deepEqual(snapshots(root), before);
});

test('installation preserves existing agents/instructions, copies referenced resources, and is idempotent', () => {
  const root = fixture();
  fs.mkdirSync(path.join(root, '.github', 'agents'), { recursive: true });
  fs.writeFileSync(path.join(root, '.github', 'agents', 'bank-review.agent.md'), 'Existing reviewer, owned by the team.\n');
  fs.writeFileSync(path.join(root, '.github', 'copilot-instructions.md'), 'Existing project rules.\n');
  const originals = snapshots(root);
  const first = run(root, '--apply');
  assert.equal(first.status, 0, first.stderr);
  for (const [relative, bytes] of Object.entries(originals)) assert.equal(snapshots(root)[relative], bytes);
  for (const relative of ['.github/keystone/workflow.md', '.github/keystone/templates/change-record.md', '.github/keystone/templates/module-profile.md']) {
    assert.deepEqual(fs.readFileSync(path.join(root, relative)), fs.readFileSync(path.join(packageRoot, relative)));
  }
  assert.equal(fs.readdirSync(path.join(root, '.github', 'skills')).length, 8);
  const installed = snapshots(root);
  const second = run(root, '--apply');
  assert.equal(second.status, 0, second.stderr);
  assert.match(second.stdout, /Installed 0 new files/);
  assert.deepEqual(snapshots(root), installed);
});

test('one conflicting file prevents all planned additions', () => {
  const root = fixture();
  fs.mkdirSync(path.join(root, '.github', 'keystone'), { recursive: true });
  fs.writeFileSync(path.join(root, '.github', 'keystone', 'context.md'), 'Team-owned context; preserve it.\n');
  const before = snapshots(root);
  const result = run(root, '--apply');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Conflicts found/);
  assert.deepEqual(snapshots(root), before);
});

test('an existing file in place of a directory is rejected without writes', () => {
  const root = fixture();
  fs.writeFileSync(path.join(root, '.github'), 'Existing file.\n');
  const before = snapshots(root);
  const result = run(root, '--apply');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Parent is not a directory/);
  assert.deepEqual(snapshots(root), before);
});

test('linked destination is rejected and its target remains unchanged', t => {
  const root = fixture();
  const external = fs.mkdtempSync(path.join(fixturesRoot, 'outside-'));
  fs.writeFileSync(path.join(external, 'keep.txt'), 'Unrelated content.\n');
  try { fs.symlinkSync(external, path.join(root, '.github'), process.platform === 'win32' ? 'junction' : 'dir'); }
  catch (error) { if (error.code === 'EPERM') return t.skip('Symlink/junction creation unavailable on this platform.'); throw error; }
  const before = snapshots(external);
  const result = run(root, '--apply');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Linked destination/);
  assert.deepEqual(snapshots(external), before);
});

test('nested directories are not treated as repository roots', () => {
  const root = fixture();
  const nested = path.join(root, 'module with spaces');
  fs.mkdirSync(nested);
  const before = snapshots(root);
  const result = run(nested, '--apply');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /repository root/);
  assert.deepEqual(snapshots(root), before);
});
