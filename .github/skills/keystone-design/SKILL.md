---
name: keystone-design
description: "Designs contracts and validation for a defined change by comparing alternatives. Use when technical or architectural decisions need resolution."
---

# Keystone Design

Design a solution that concentrates complexity behind understandable interfaces and respects the project's constraints.

Start with `/keystone-design <brief or change record>`. For tracked work, use the [workflow contract](../../keystone/workflow.md).

## Input

An established problem and scope, affected modules and known constraints. Use an existing brief or equivalent information already agreed in the conversation.

## Process

1. **Understand the current system.** Read the [shared context](../../keystone/context.md). Identify interfaces, existing decisions and relevant module practices. For a new system, use actual requirements and constraints.
   Complete when the proposed change's location and existing contracts are understood.
2. **Compare relevant alternatives.** Evaluate behavior, interface complexity, change locality, testability and operational cost. Reuse suitable interfaces and introduce variation where a demonstrated need exists.
   Complete when the proposed option has a verifiable rationale and explicit costs.
3. **Resolve uncertainty.** When a decision requires an executable answer, propose a bounded investigation or prototype with a question and success criterion. Use its evidence before closing the decision.
   Complete when uncertainty affecting the solution is resolved or identified as a blocker.
4. **Define contracts and validation.** Describe observable interfaces, invariants, errors and relevant requirements. Agree test interfaces and expected evidence, reusing prior agreements. Include compatibility and integration for changes across modules. Apply data, security and operational criteria required by project sources.
   Complete when the design supports acceptance criteria and feasible validation.
5. **Record decisions.** Preserve the proposal and review state. Record an architecture decision when it captures a real trade-off, is expensive to reverse and needs context to explain its rationale. Follow existing documentation conventions.

## Output

Solution proposal, considered alternatives, affected modules and contracts, compatibility strategy, agreed test interfaces, applicable requirements, decisions and unresolved questions. Retain decisions or their authoritative links in the record and return the handoff.

## Completion

Ready for planning when necessary contracts and decisions are agreed and verifiable. Distinguish proposed from approved design and identify any test interface awaiting a decision.
