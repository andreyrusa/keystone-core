# Workflow and handoffs

Use this contract for a requested multi-phase change, a task within its plan, or resumption in another session. A user selects the activity; the agent completes that activity and returns a handoff. Existing project controls govern tools and external actions.

## Durable change record

Reuse the project's existing work record and formats. If none exist, create `.keystone/changes/<change-id>.md` from [the change record template](templates/change-record.md) inside the repository. Use the task's stable ID when present; otherwise choose a unique descriptive local ID and record it. A GitHub issue URL can be the primary identity. For a read-only request or an unavailable repository, return the record content in chat and identify its unsaved state.

The record is an index of agreed requirements, decisions, tasks and evidence. Link an authoritative issue/specification or document rather than maintaining conflicting copies. Read the record and linked sources at the start of each phase; update only the requested activity's result and affected status. Preserve previous evidence and label superseded entries.

## Phase contract

| Requested activity | Required input | Result retained in the record | Completion condition |
|---|---|---|---|
| Discover | Request and available project context | Problem, actors, scope, acceptance examples, impact and open decisions | Success is verifiable; unresolved scope decisions have owners |
| Design | Agreed problem/scope, affected module sources | Chosen contracts, alternatives, compatibility, requirements and validation strategy | Necessary contracts and test interfaces are agreed or explicitly outstanding |
| Plan | Agreed scope/decisions and validation strategy | Authoritative specification, criterion IDs, tasks, dependencies, issue links or unpublished drafts | Tasks are actionable; dependencies are acyclic; user agreement is recorded |
| Build | Selected task, criteria, dependencies and test interfaces | Branch/PR references, concrete change state, criterion-to-evidence mapping | Required checks passed for the demonstrated scope; otherwise pending validation |
| Review | Concrete comparison, specification, standards and evidence | Separate specification/standards findings, reviewed state and outstanding controls | Every relevant criterion/rule is evaluated or marked not evaluable |
| Deliver | Identified version, review state, target and project procedures | Prepared package; executed integration/delivery and verification when authorized | Preparation, execution and operational verification have separate evidence |
| Retro | Session/record and its actual outcome | Improvement proposals with evidence, owners and success criteria | Supported proposals or explicit insufficient evidence |
| Diagnose | Symptom, expected behavior and actual execution path | Reproduction, experiments, cause/confidence and correction proposal/evidence | Cause demonstrated or investigation blocker recorded; correction independently validated |

For a small task, existing agreements can satisfy discovery, design or planning. Record the source and why a separate activity is unnecessary; do not fabricate outputs or approvals. A defect can start at Diagnose. A correction can be implemented there when explicitly requested, or passed to Build. A review may finish with findings and return to the relevant activity when the user requests it.

A result can be partial or blocked. Producing a result does not establish readiness for the next activity; apply the selected skill's completion rule and retain outstanding prerequisites in the handoff.

## Task and evidence states

Tasks use **planned**, **ready**, **in progress**, **pending validation**, **ready for review**, **changes required**, **ready for delivery** or **done**. Dependencies and acceptance criteria determine readiness. Completion follows the project's definition of done, including deployment when required. A ready task does not authorize its execution.

Checks use **passed**, **failed**, **not run** or **not applicable**, with the last two explained. Each evidence entry identifies criterion, module, procedure, environment, evaluated scope and state, result and source/log reference. Name the implementation, configuration and input data covered by that check. For uncommitted work, identify the evaluated diff and new files within that scope as well as the base commit. A commit alone does not identify a dirty working tree.

Distinguish the evaluated inputs from the report/change-record output describing them. A bookkeeping edit alone does not change scoped implementation evidence when it leaves the evaluated inputs unchanged. If a record or report is itself part of the requested change or a check's input, include it in that scope. GitHub-required checks and approvals still apply to the actual PR head/base under repository rules; committing a record update does not exempt the new head from those rules.

Review conclusions, executed actions, approvals and check results are different facts. Record the source of an approval or request; an agent cannot establish human agreement by writing an approval field.

## Resume and changed inputs

1. Resolve the supplied change ID/path and read its handoff, sources and task state. Compare it with actual files, Git state, issues/PRs and available evidence.
2. Identify the requested phase/task, reuse valid agreements, and resolve prerequisites that affect that activity. Report contradictions instead of choosing a convenient record silently.
3. When requirements/contracts change, mark affected tasks and downstream evidence as superseded or pending. When code, PR head/base or the validation environment changes, re-evaluate the affected checks and review. Preserve evidence for its original state rather than relabeling it as current.
4. Read existing remote state before retrying an uncertain mutation. Reconcile partial completion and record actual artifacts; continue only the authorized work that remains.

## Handoff at the end of every activity

Return the change/task ID and record path or unsaved content; requested activity and its result; actual artifact references and evaluated state; checks/results and limitations; unresolved decisions with owners; human review/authorization still needed; and one suggested next invocation. Stop at that handoff unless the user has explicitly requested another activity.

A new session can resume with `/keystone-build #file:.keystone/changes/<change-id>.md task <task-id>`. Loading another skill within the same requested activity supplies its method; it does not create a new phase request or permission grant.
