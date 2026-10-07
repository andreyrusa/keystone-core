---
name: keystone-discover
description: "Clarifies a request into a verifiable problem, scope and open decisions. Use when the desired outcome needs definition before design or implementation."
---

# Keystone Discover

Turn a request into a change brief that the user and agent can interpret consistently.

Start with `/keystone-discover <request>`. For tracked work, create or resume its change record through the [workflow contract](../../keystone/workflow.md).

## Input

A request, available context and existing agreements. For a reported defect, capture the symptom; investigating its cause is a diagnosis activity.

## Process

1. **Locate the change.** Read the [shared context](../../keystone/context.md). Investigate current behavior and potentially affected modules. Separate observed behavior from the desired outcome.
   Complete when current and desired states and consulted sources are identified. For new development, state that no implementation exists yet.
2. **Resolve decisions in rounds.** Ask about unresolved goals, actors, scope and success conditions. Group questions answerable now and offer reasoned recommendations. Investigate accessible project facts before asking the user. Defer questions whose prerequisites remain unresolved.
   Complete when every decision affecting scope has an answer or an outstanding item with an owner.
3. **Clarify domain language.** Test ambiguous terms against the glossary and concrete scenarios. Record agreed terms in the existing location, keeping business vocabulary separate from technical decisions.
   Complete when the terms needed to explain the change have shared meanings.
4. **Identify impact and boundaries.** Identify potentially affected interfaces, users, processes and data. Consult applicable policies to determine required reviews. Record known constraints, exclusions and necessary investigations.
   Complete when the brief distinguishes what changes, what is preserved and what remains unknown.

## Output

A concise brief containing the problem, desired outcome, actors, scope, acceptance examples, constraints, preliminary impact, agreed terms and open decisions. Include sources and owners for blocking decisions. Retain the brief or its authoritative link in the change record and return the handoff.

## Completion

Ready for design when success is verifiable and no unresolved decision changes the goal or scope. Otherwise report **partial discovery** and the missing decisions. Record whether the user reviewed the brief; drafting it does not establish agreement.
