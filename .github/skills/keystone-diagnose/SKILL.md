---
name: keystone-diagnose
description: "Diagnoses defects and regressions through reproduction and testable hypotheses. Use when behavior fails, is intermittent or shows a difficult performance regression."
---

# Keystone Diagnose

Establish defect evidence before choosing a correction. Use project tools and environments.

Start with `/keystone-diagnose <symptom or change record>`. State whether correction is requested. For tracked work, use the [workflow contract](../../keystone/workflow.md).

## Input

A symptom, expected behavior and known circumstances. Versions, inputs and previous records are useful sources, not universal prerequisites.

## Process

1. **Build the reproduction.** Read the [shared context](../../keystone/context.md). Find a test, invocation or procedure exercising the actual path and detecting the reported symptom. Execute it and capture failure. For intermittent behavior, record frequency and conditions. For performance, establish a comparable measurement.
   Complete when an observed signal distinguishes the defect from correct behavior. If the environment prevents reproduction, report attempts, evidence and required access or information, keeping the cause unverified.
2. **Reduce the scenario.** Simplify inputs and conditions while preserving the symptom. Rerun the check after each relevant reduction.
   Complete when the scenario is narrow enough to test causes and any remaining isolation limits are explained.
3. **Test hypotheses.** Identify plausible causes and observations that could refute each. Prioritize investigation by evidence and cost. Change one relevant condition per experiment and record its effect. Use targeted instrumentation within environment authorization.
   Complete when evidence connects a cause to the failure and distinguishes unresolved alternatives.
4. **Define correction and validation.** Identify an interface that detects the actual failure pattern. Prepare a regression case or document why architecture prevents a pertinent test. When correction is requested, implement within scope and rerun the original reproduction and affected checks.
   Complete when the proposal has defined validation; executed corrections also require results and the disposition of temporary instrumentation.

## Output

Symptom, reproduction and results, reduced scenario, tested hypotheses, cause and confidence, proposed or executed correction, regression evidence and outstanding items. Retain the investigation and affected evidence in the record and return the handoff.

## Completion

A diagnosis establishes a demonstrated cause or explicitly reports an investigation blocker. A correction is validated only when the original reproduction no longer detects the defect and necessary checks have evidence. Distinguish completed diagnosis from corrected defect.
