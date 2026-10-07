# Verification · Keystone Core v0.2

Date: 7 October 2026.

## Completed checks

- All eight revised skills pass the skill-creator validator. Names match folders, descriptions meet format limits and entrypoints stay under 100 lines.
- The package validator passes for skill inventory, local references, Markdown fences, retained license and attribution placement. Automatic relevance-based discovery remains enabled in the definitions.
- Six installer integration tests pass with zero failures or skips: preview leaves the repository unchanged; installation preserves existing agents/instructions and is idempotent; conflicting files prevent additions; non-directory parents are rejected; linked destinations leave their targets unchanged; nested module directories are rejected as installation roots.
- Installer help runs successfully. Helpers use Node.js built-ins and need no third-party runtime packages.
- The handoff contract now distinguishes evaluated input scope from report/record output, while retaining actual PR head/base requirements. This instruction clarification still requires the deferred behavioral pilot.
- Archive inventory, integrity and byte comparison are checked during packaging; release evidence is distributed alongside the ZIP.

The executed environment was Windows with Node.js v24.16.0 and Git 2.49.0.windows.1. Installer fixtures were isolated local Git repositories under the task's `work/` directory. No bank repository or agent configuration was changed.

## Reproduce the local checks

Run from a work directory outside the unpacked package, replacing `<package>` with its actual path:

```text
node "<package>/tools/validate-pack.mjs"
node --test "<package>/tests/install.test.mjs"
```

Installer tests create disposable fixtures under the working directory's `work/keystone-install-tests/`; `KEYSTONE_TEST_DIR` can select another authorized scratch location. Tests do not publish issues, push branches, merge or deploy.

## Deferred behavioral validation

Live Copilot/GitHub validation is deferred by the user. [PILOT.md](PILOT.md) covers the full guided feature path, new and existing development, cross-module work, diagnosis, fresh-chat resumption, changed evidence and failure/authority boundaries. These scenarios are **not run**.

The phase methods and handoff contracts are implemented as skill instructions. Format/reference and installer checks do not prove that Copilot loads or follows them, or that the complete development workflow succeeds. No remote issue, branch or PR was created for v0.2, and no delivery was performed. The current editor inventory lacks a Copilot extension; the approved pilot setup still needs to be established.

The package supports project-supplied technology procedures, but no Java, Spring Batch, Python, Node or Scala product workflow is claimed as behaviorally validated by these checks. Existing agents, real project policies, module procedures and applicable controls must be supplied in the pilot.

## Security scope

The prior security assessment covers v0.1. v0.2 adds executable installation helpers and changes instruction behavior; that assessment does not certify this release or an enterprise deployment. Package digest checks establish snapshot integrity, not publisher authenticity or enforced agent permissions.
