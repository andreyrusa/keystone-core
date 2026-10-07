# GitHub CLI procedures

Read this reference only when GitHub CLI is the available team-approved interface. The [GitHub workflow](github.md) defines target resolution, authorization and evidence. Run `gh <command> --help` for the installed version and host capabilities. These examples are procedures, not automatic actions.

Use the resolved host/repository for every operation. For Enterprise hosts, authenticate against that host and use its supported repository URL or host/owner/repository form. Repository selection does not grant access. Keep credentials in the approved credential store rather than change records or command output.

## Read and prepare

Use `gh repo view <repository>`, `gh issue view <number> --repo <repository>` and `gh pr view <number> --repo <repository>` to resolve existing state. Inspect the actual checkout and remotes separately. Use structured output supported by the installed version when exact commit/check fields are needed.

Prepare issue or PR bodies as UTF-8 files in the project's agreed work location. Use `--body-file` to preserve newlines and avoid interpolation of arbitrary text into shell commands. Draft files are unpublished artifacts; record that state.

## Authorized publication

```text
gh issue create --repo <repository> --title <agreed-title> --body-file <issue-body-path>
git switch -c <task-branch> <resolved-base>
git push --set-upstream <verified-remote> <task-branch>
gh pr create --repo <repository> --base <base> --head <head> --title <title> --body-file <pr-body-path>
```

Use the repository's existing commit process before a push. Add `--draft` to PR creation when work or required validation is incomplete and the host supports it. Native issue hierarchy/dependency operations depend on available host features; retain actual links and disclose the documented fallback when needed. Verify each returned artifact before recording it as created, and inspect existing state before retrying an uncertain result.

## Review and integration

Read the actual PR head/base, reviews, required checks and repository controls. `gh pr checks <number> --repo <repository> --required` can inspect GitHub-required checks when supported; other pipeline systems remain authoritative for their own evidence. A CLI exit code alone does not establish all project acceptance criteria or approvals.

For an authorized merge, use the approved repository strategy and match the reviewed head with `--match-head-commit <reviewed-sha>` when supported by `gh pr merge`. Verify the result and merged commit. If a new head exists, re-evaluate the affected evidence instead of substituting it silently. Deployment follows the project's actual procedure and has separate authorization and verification.

References: [GitHub CLI issue creation](https://cli.github.com/manual/gh_issue_create), [PR creation](https://cli.github.com/manual/gh_pr_create), [required checks](https://cli.github.com/manual/gh_pr_checks), [merge options](https://cli.github.com/manual/gh_pr_merge).
