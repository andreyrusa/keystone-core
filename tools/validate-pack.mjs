#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const expected = ['build', 'deliver', 'design', 'diagnose', 'discover', 'plan', 'retro', 'review'].map(phase => `keystone-${phase}`).sort();
function assert(condition, message) { if (!condition) throw new Error(message); }
function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const location = path.join(directory, entry.name);
    assert(!entry.isSymbolicLink(), `Linked file: ${location}`);
    return entry.isDirectory() ? files(location) : [location];
  });
}
try {
  const skillRoot = path.join(root, '.github', 'skills');
  const actual = fs.readdirSync(skillRoot).sort();
  assert(JSON.stringify(actual) === JSON.stringify(expected), 'Skill inventory differs from the eight supported activities.');
  for (const name of expected) {
    const content = fs.readFileSync(path.join(skillRoot, name, 'SKILL.md'), 'utf8');
    const header = content.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n/);
    assert(header, `${name}: missing frontmatter`);
    const skillName = header[1].match(/^name:\s*(.+)$/m)?.[1].trim();
    const descriptionLine = header[1].match(/^description:\s*(.+)$/m)?.[1].trim();
    assert(skillName === name, `${name}: folder/frontmatter name mismatch`);
    assert(descriptionLine, `${name}: missing description`);
    const description = descriptionLine.startsWith('"') ? JSON.parse(descriptionLine) : descriptionLine;
    assert(description.length > 0 && description.length <= 1024, `${name}: description length invalid`);
    assert(content.split(/\r?\n/).length <= 100, `${name}: move conditional detail out of the entrypoint`);
  }
  let references = 0;
  const inventory = files(root);
  for (const file of inventory.filter(file => file.endsWith('.md'))) {
    const content = fs.readFileSync(file, 'utf8');
    assert((content.match(/^```/gm) || []).length % 2 === 0, `Unbalanced Markdown fences: ${file}`);
    if (file.startsWith(path.join(root, '.github') + path.sep)) assert(!/\bMatt\b|mattpocock/i.test(content), `Attribution belongs in root notices: ${file}`);
    for (const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      const target = match[1];
      if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('#')) continue;
      const resolved = path.resolve(path.dirname(file), target.split('#')[0]);
      const relative = path.relative(root, resolved);
      assert(relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative), `Reference escapes package: ${target}`);
      assert(fs.existsSync(resolved) && fs.statSync(resolved).isFile(), `Broken local reference in ${path.relative(root, file)}: ${target}`);
      references++;
    }
  }
  assert(fs.readFileSync(path.join(root, 'LICENSE.mattpocock'), 'utf8').includes('Copyright (c) 2026 Matt Pocock'), 'Original license missing.');
  process.stdout.write(JSON.stringify({ status: 'passed', skills: expected.length, files: inventory.length, localReferences: references, scope: 'package structure and references; behavioral validation is separate' }, null, 2) + '\n');
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}
