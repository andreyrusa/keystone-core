# GitHub workflow

Use this reference for work tracked through GitHub repositories, issues, branches and pull requests. It defines procedures for the invoking agent; it is not an installed connector or executable integration.

## Resolve the target

Identify the GitHub host, code repository and issue repository from the task, repository remotes and [project sources](project-context.md). Preserve full repository identity in links and cross-repository references. Read existing templates and conventions before proposing new ones.

Use an authenticated tool available in the environment: a supported GitHub integration, GitHub CLI or another team-approved interface. Verify the actual host, target and access. Detect supported features on the organization's installation rather than assuming Enterprise Cloud features exist on every Enterprise Server version.

When GitHub CLI is the selected interface, read the [CLI procedures](github-cli.md) for draft files, publication and exact-state integration. Other approved tools can implement the same artifact contract.

When access or a required feature is unavailable, prepare reviewable content and report what remains unpublished. Local implementation can proceed when its prerequisites are available. Keep requested remote actions within session authorization and verify outcomes before retrying a creation with an uncertain result.

## Artifact responsibilities

| Artifact | Purpose |
|---|---|
| Issue | Problem, expected outcome, scope, acceptance criteria and work relationships |
| Branch | Commits implementing an agreed unit of work |
| Pull request | Proposed integration, linked work, change explanation, checks and review evidence |
| Repository document | Maintained technical decisions and reusable project context |
| Check or pipeline run | Evidence for the concrete commit and environment it evaluated |
| Delivery record | Version, destination, operational verification and recovery status |

A small change can use one issue, one branch and one pull request. A larger initiative can use a parent issue and task issues. Follow the team's granularity and integration strategy; sharing an integration branch is valid when the plan requires it. For a direct code request without an issue, retain the request as the specification source and create an issue when it is part of the requested work or the project requires one.

## Issues and planning

Reuse the referenced issue and read its relevant body and comments. An agreed specification can live in the parent issue or the team's existing document location, with a stable link. Each task issue should contain its outcome, acceptance criteria, relevant decisions, dependencies and validation expectations. Use existing forms and labels.

For larger work, use native sub-issue relationships when available. Keep hierarchy separate from blocking relationships: belonging to an initiative does not imply another task must finish first. Use native blocked-by relationships when supported. Otherwise record full issue references and blocking reasons in the issue body and disclose the fallback.

Prepare the breakdown for review, then publish the agreed plan when issue creation or updates are part of the authorized activity. Create dependencies in an order that allows references to actual issue identifiers. Return real URLs and state any missing relationships. Read the existing state before a retry so an uncertain response does not create duplicate issues.

## Branches and implementation

Inspect the checkout, current branch, remotes and existing branch or pull request for the task. Reuse a suitable task branch where appropriate. Resolve the base from the project's integration policy, which may differ from its default branch. Preserve unrelated changes and follow branch naming conventions.

For authorized branch creation, create the branch from the resolved base and retain the issue relationship where supported. Linking through the issue's Development section is one supported option; an issue number in a branch name alone does not establish that relationship. GitHub's issue-page branch creation is a preview feature, so it is an optional mechanism rather than a required step.

Commits, pushes and pull request publication follow the requested activity and existing authorization. Validate before claiming readiness. When preparing or opening a pull request, select explicit head and base branches, use the repository template and record outcome, linked issues, validation, limitations and operational impact when relevant. Mark a published pull request as draft when work or required validation is incomplete and that state is supported by the project.

## Linking and completion

Use stable issue and pull request links throughout the activity. When a task spans repositories, include a branch and pull request reference for each affected repository and record cross-repository integration evidence.

Closing keywords such as `Closes #123` have specific default-branch behavior. Use them only when the proposed integration completes the issue under the team's definition of done. For work requiring deployment or operational verification after merge, use a non-closing reference and keep completion pending until that evidence exists. Verify the host's linking behavior and the actual base branch; merging into another branch must not be presented as automatically closing an issue.

Review the exact pull request state, including head commit, base, issue criteria and check results. New commits can invalidate previous evidence. Follow repository rules for required approvals, checks and merge strategy. Agent findings are distinct from GitHub review approval. Merge and deployment are separate events, each governed by the requested activity and project procedure.

## Evidence and output

Return the issue URLs, branch names, pull request URLs, relevant commit identifiers and validation references created or consulted. Distinguish **prepared**, **created**, **updated**, **merged**, **deployed** and **not executed** states. Report completed actions only after verifying their result. Update only the portions of existing issues or pull requests relevant to the requested activity.

## Platform references

- [Issue-linked branch creation](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-a-branch-for-an-issue).
- [Sub-issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues).
- [Issue dependencies](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies).
- [Issue and pull request links](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue).
- [Creating pull requests](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).
- [Protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).
