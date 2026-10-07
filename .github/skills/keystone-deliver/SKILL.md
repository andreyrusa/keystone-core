---
name: keystone-deliver
description: "Prepares delivery with evidence, operational procedures and recovery. Use when assembling a delivery package or executing an explicitly requested integration or delivery under project controls."
---

# Keystone Deliver

Prepare a reviewable delivery and execute it when requested and authorized, following the project's procedure.

Start with `/keystone-deliver <change record> prepare`. Request execution separately, or include its concrete target and authorized operations in the current request. For tracked work, use the [workflow contract](../../keystone/workflow.md).

## Input

An identified change and version, available review, delivery destination and applicable integration, deployment, verification and recovery procedures.

## Process

1. **Identify the delivery.** Read the [shared context](../../keystone/context.md) and [GitHub workflow](../../keystone/github.md). Establish version, destination, owners and scope. Link the relevant issues, pull requests and commits. Match reviews and checks to the content being delivered.
   Complete when the request, change, version and evidence are linked without mixing states.
2. **Check operational requirements.** Consult project integration and delivery controls. Identify prerequisites, dependencies, affected contracts, data or configuration changes and recovery procedures. Use existing health and follow-up criteria.
   Complete when each requirement has evidence, an outstanding condition or a reason it does not apply.
3. **Prepare the package.** Summarize behavior, impact, evidence, delivery steps, subsequent verification and recovery. Distinguish prepared from executed actions. Mark proposed procedures as unverified when they have not been demonstrated.
4. **Execute the requested work.** Apply existing permissions and authorization to a requested integration or delivery, following required repository checks and reviews. Treat pull request merge and deployment as separate operations. When a reliable procedure or required authorization is missing, provide the prepared package and identify the exact prerequisite. Record executed results and follow the established failure procedure. Update issue completion only when the team's definition of done is met.

## Output

Delivery package and state: **prepared**, **prerequisites outstanding** or **executed**. For executed delivery, include destination, version, observed results and pending follow-up. Reference existing project approvals; an agent recommendation does not replace them. Retain integration, deployment and operational verification as separate entries in the record and return the handoff.

## Completion

Prepared when the package identifies the steps, evidence and outstanding prerequisites. Ready to execute only when required controls and prerequisites are satisfied. Verified after execution when project post-delivery criteria are met. Missing evidence leaves the relevant state pending, with an owner responsible for obtaining it.
