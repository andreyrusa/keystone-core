---
name: keystone-review
description: "Reviews an identified change against its specification and applicable standards. Use when reviewing a branch, pull request or working changes without modifying implementation."
---

# Keystone Review

Evaluate requested behavior and applicable standards separately. Obtain technical and risk rules from project sources.

Start with `/keystone-review <PR, comparison or change record>`. For tracked work, use the [workflow contract](../../keystone/workflow.md).

## Input

An identifiable change, comparison reference or working scope, specification and standards sources. Resolve comparison ambiguity before review when available choices would change the result.

## Process

1. **Fix the scope.** Read the [shared context](../../keystone/context.md) and [GitHub workflow](../../keystone/github.md). Verify the reference and record the concrete state reviewed. For a pull request, identify repository, URL, base and head commit and read its linked work. Use the appropriate branch comparison base. For local work, distinguish requested staged, unstaged and new files. Report an empty change.
   Complete when the reviewed content and evaluated input scope are reproducibly identifiable, with the report destination distinguished from those inputs.
2. **Evaluate the specification.** Compare each requirement with the change and evidence. Identify missing, incorrect or out-of-scope behavior. Without an accessible specification, report **specification not evaluable**; absence is not a passed review.
   Complete when each relevant criterion has a supported conclusion or an explicit evidence gap.
3. **Evaluate standards.** Consult organizational, project and affected-module rules. Distinguish documented violations from design recommendations. Consider interface clarity, duplication and change dispersion where they affect maintainability. Use tool results for mechanical checks and identify unavailable results.
   Complete when applicable rules have an evaluation and identifiable source.
4. **Check evidence.** Confirm validations and repository checks refer to the reviewed state and cover affected contracts. Include security, data, compatibility and operation when required by context. Check integration evidence for changes across modules and identify required approvals or checks still outstanding.
   Complete when demonstrated, inferred and unverified conclusions are distinguishable.

## Output

Separate **Specification** and **Standards** sections. Each finding contains its location, source or criterion, failure scenario, impact and suggested correction. Include reviewed state, consulted evidence, limitations and counts per axis. Explain finding importance; a style recommendation is not equivalent to a defect. Save the report or its source link in the record and return the handoff; leave implementation files unchanged.

## Completion

Conclude each axis as **no findings within evaluated scope**, **findings present** or **not evaluable**. Keep agent review separate from required human approvals and project controls. Finish with the report; corrections and publication of a GitHub review require the corresponding requested activity. A review does not authorize merging.
