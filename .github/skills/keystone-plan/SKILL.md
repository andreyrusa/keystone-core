---
name: keystone-plan
description: "Turns agreed scope and decisions into a specification and GitHub issue plan. Use when work needs verifiable tasks, acceptance criteria and explicit dependencies."
---

# Keystone Plan

Turn agreements into tasks with enough context for independent execution. Use GitHub Issues and the project's existing templates and conventions when publishing work.

Start with `/keystone-plan <design or change record>`. For tracked work, use the [workflow contract](../../keystone/workflow.md).

## Input

An agreed problem, scope, solution decisions and validation strategy. Identify missing information that changes expected behavior before finalizing the affected work.

## Process

1. **Gather sources.** Read the [shared context](../../keystone/context.md), [GitHub workflow](../../keystone/github.md), request, relevant issue body, comments and decisions. Resolve the code and issue repositories and check the plan against the project's actual state.
   Complete when agreed requirements and unresolved proposals are distinguishable.
2. **Synthesize the specification.** Describe the problem, outcome, scope, behavior, decisions, validation and exclusions. Match its size to the change; a small task can contain its own specification.
   Complete when each requested behavior has an evaluable criterion with a stable identifier and applicable requirements have sources.
3. **Define verifiable tasks.** Each task should deliver a narrow, complete behavior through the layers required to verify it. Include necessary preparation. For broad mechanical changes, justify sequencing and compatibility instead of forcing independently untestable slices.
   Complete when each task has a stable identifier, a verifiable result and manageable scope, and every acceptance criterion maps to a task or an explicit project responsibility.
4. **Declare dependencies.** Explain what blocks each task and why. Check for cycles and confirm unblocked tasks can start with available information. Preserve requirements, relevant decisions and expected validation within each task, independent of chat history. For large work, distinguish parent/sub-issue hierarchy from blocking relationships and use supported GitHub relationships or the documented fallback.
   Complete when dependencies reflect actual constraints and available work is identifiable.
5. **Review and publish the plan.** Present deliverables, task size and dependencies to the user. Incorporate decisions. Reuse existing issues or create the agreed issues when publication is part of the authorized activity. Record actual URLs and relationships, checking for duplicates after uncertain outcomes. Provide a reviewable draft when publication is not requested or access is unavailable.

## Output

A specification and tasks. Each task includes its result, acceptance criterion IDs, decision references, dependencies and expected validation. Record user agreement and actual issue URLs for published work, or retain unpublished draft locations. Update the task map and return the handoff.

## Completion

Ready for execution when the user has agreed scope and required tasks have criteria, dependencies and defined test interfaces. Identify unfinished portions and preserve unrelated work states.
