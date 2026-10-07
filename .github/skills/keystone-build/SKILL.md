---
name: keystone-build
description: "Implements a defined task using behavior tests and project validation. Use when building features or correcting defects with established scope and expected outcomes."
---

# Keystone Build

Implement a task with frequent observable feedback. Obtain language-specific practices and execution procedures from the affected module's context.

Start with `/keystone-build <issue or change record> task <task-id>`. For tracked work, use the [workflow contract](../../keystone/workflow.md).

## Input

A GitHub issue or defined request with scope, acceptance criteria, necessary decisions, dependencies and agreed test interfaces. Reuse existing agreements and resolve only missing decisions that affect implementation.

## Process

1. **Check readiness.** Read the [shared context](../../keystone/context.md) and [GitHub workflow](../../keystone/github.md). Read the issue and relevant comments, or the equivalent request when no issue exists. Check dependencies, working state, test interfaces and applicable procedures. Reuse a suitable task branch or create one under the authorized activity from the resolved project base. Locate similar tests and module conventions.
   Complete when the selected task's dependencies and required decisions are satisfied and work can start without guessing its behavior or overwriting unrelated work. If several tasks are requested, select ready work under the agreed dependency order.
2. **Establish observable feedback.** For each new or corrected behavior, write a test at an agreed interface and run it before implementation. Confirm failure represents the expected behavior. Reuse a demonstrated defect reproduction; an environment failure does not establish that reproduction.
   When a behavior test is not pertinent, use an appropriate independent check and explain its scope before proceeding. A purely documentary change does not require an artificial code test.
3. **Implement the increment.** Make the change needed for that behavior and rerun the check. Obtain expected results from the specification, agreed examples or an independent source. Keep tests focused on observable interfaces.
   Complete each increment with its result and evidence.
4. **Validate affected work.** Run relevant local checks during implementation and required project checks for the complete change at the end. Include integration when multiple modules are affected. Record validation limits caused by unavailable environments or procedures.
   Complete when each criterion has evidence or an explicit limitation and observed failures are described.

## Output

Implemented change, criterion-to-evidence mapping, executed checks, failures and limitations, additional decisions and readiness for review. Include issue, branch and concrete evaluated-state references. Prepare or publish a linked pull request when requested, using the project template and explicit base and head. Git operations and publication follow current instructions and authorization. Update selected task states and validation evidence, then return the handoff.

## Completion

Declare **validated implementation** only for the demonstrated scope. Review is a subsequent user-selected activity. A failed or unexecuted mandatory check leaves the implementation **pending validation**, with the missing requirement identified.
