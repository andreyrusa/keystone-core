#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argumentsList = process.argv.slice(2);
const apply = argumentsList.includes('--apply');
const targetArgument = argumentsList.find(argument => !argument.startsWith('--'));
if (argumentsList.length === 1 && argumentsList[0] === '--help') {
  process.stdout.write('Usage: node tools/install.mjs <repository-root> [--apply]. Default: preview only.\n');
  process.exit(0);
}

function fail(message) { throw new Error(message); }
function isWithin(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative));
}
function exists(location) {
  try { return fs.lstatSync(location); } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}
function inspectDestination(root, destination) {
  if (!isWithin(root, destination)) fail('Destination escapes the selected repository.');
  const parts = path.relative(root, destination).split(path.sep);
  let current = root;
  for (let index = 0; index < parts.length; index++) {
    current = path.join(current, parts[index]);
    const stat = exists(current);
    if (!stat) continue;
    if (stat.isSymbolicLink()) fail(`Linked destination requires manual review: ${path.relative(root, current)}`);
    const leaf = index === parts.length - 1;
    if (!leaf && !stat.isDirectory()) fail(`Parent is not a directory: ${path.relative(root, current)}`);
    if (leaf && !stat.isFile()) fail(`Destination is not a regular file: ${path.relative(root, current)}`);
  }
}
function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name)).flatMap(entry => {
    const location = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) fail(`Package contains a linked file: ${location}`);
    if (entry.isDirectory()) return sourceFiles(location);
    if (!entry.isFile()) fail(`Package contains an unsupported file: ${location}`);
    return [location];
  });
}

try {
  if (!targetArgument || argumentsList.some(argument => argument.startsWith('--') && argument !== '--apply') || argumentsList.filter(argument => !argument.startsWith('--')).length !== 1) {
    fail('Usage: node tools/install.mjs <repository-root> [--apply]. Default: preview only.');
  }
  const target = fs.realpathSync(path.resolve(targetArgument));
  if (!fs.statSync(target).isDirectory()) fail('Target must be an existing repository directory.');
  const gitRoot = fs.realpathSync(execFileSync('git', ['-C', target, 'rev-parse', '--show-toplevel'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim());
  if (path.relative(gitRoot, target) !== '') fail('Select the Git repository root, not a nested module directory.');
  const files = [path.join(packageRoot, '.github', 'skills'), path.join(packageRoot, '.github', 'keystone')].flatMap(sourceFiles);
  const plan = files.map(source => {
    const relative = path.relative(packageRoot, source);
    const destination = path.join(target, relative);
    inspectDestination(target, destination);
    const data = fs.readFileSync(source);
    const stat = exists(destination);
    const state = !stat ? 'add' : fs.readFileSync(destination).equals(data) ? 'unchanged' : 'conflict';
    return { source, relative, destination, data, state };
  });
  for (const item of plan) process.stdout.write(`${item.state}: ${item.relative.replaceAll(path.sep, '/')}\n`);
  if (plan.some(item => item.state === 'conflict')) fail('Conflicts found. No files changed. Review and merge the differing files manually.');
  if (!apply) {
    process.stdout.write(`Preview only: ${plan.filter(item => item.state === 'add').length} additions. Use --apply to install.\n`);
  } else {
    const created = [];
    try {
      for (const item of plan) {
        inspectDestination(target, item.destination);
        if (item.state === 'unchanged') {
          if (!fs.readFileSync(item.destination).equals(item.data)) fail(`Destination changed after preview: ${item.relative}`);
          continue;
        }
        fs.mkdirSync(path.dirname(item.destination), { recursive: true });
        inspectDestination(target, item.destination);
        fs.writeFileSync(item.destination, item.data, { flag: 'wx' });
        created.push(item);
      }
      process.stdout.write(`Installed ${created.length} new files. Existing agents and instructions were preserved.\n`);
    } catch (error) {
      for (const item of created.reverse()) {
        inspectDestination(target, item.destination);
        if (exists(item.destination) && fs.readFileSync(item.destination).equals(item.data)) fs.unlinkSync(item.destination);
      }
      throw error;
    }
  }
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}
