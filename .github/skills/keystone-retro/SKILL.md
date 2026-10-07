---
name: keystone-retro
description: "Analyzes a development session and proposes improvements to instructions, navigation, tools and checks. Use when a retrospective or assessment of agent work is requested."
---

# Keystone Retro

Improve the agents' working environment using evidence from the session.

Start with `/keystone-retro <session evidence or change record>`. For tracked work, use the [workflow contract](../../keystone/workflow.md).

## Input

An identified session, record or evidence set and its outcome. Inaccessible records limit conclusions; state the coverage of available sources.

## Process

1. **Reconstruct events.** Read the [shared context](../../keystone/context.md) and relevant records. Identify actual decisions, mistakes, corrections, waits and validations. Separate observations from recollection or interpretation.
   Complete when every problem to be analyzed has locatable evidence.
2. **Relate problems to the environment.** Check inadequate navigation, outdated context, ambiguous rules, missing tools and existing checks that did not run. Consider integration between agent, skill and technical profile.
   Complete when each proposal explains the observed failure it could prevent.
3. **Choose a proportionate intervention.** For mechanical errors, prioritize a deterministic check compatible with existing tools. For judgment, improve the relevant standard or reference. Correct the source of the problem rather than accumulating general instructions.
   Complete when each intervention has scope, an owner and a way to measure usefulness.

## Output

Proposals ordered by impact: problem evidence, probable environmental cause, suggested change, approximate cost, owner and success criterion. Distinguish demonstrated causes from hypotheses. Retain proposals or their authoritative links in the record and return the handoff.

## Completion

Finish with supported proposals or a conclusion that evidence is insufficient to propose an improvement. Implement proposals when included in the request; keep their scope separate from the product change being analyzed.
