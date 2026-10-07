# Project sources

This editable reference is read by Keystone skills. It is not executable configuration or a policy enforcement mechanism.

The team uses **GitHub for source code management** and can create issues and branches. The package has no concrete bank repository attached. Repository identities and project-specific conventions remain **not declared**. Skills can discover sources in the repository and distinguish observations from decisions still required from the team.

## Shared sources

| Information | Initial state |
|---|---|
| Repository instructions and owners | Not declared |
| Applicable policies and current exceptions | Not declared |
| Coding standards | Not declared |
| Glossary and domain map | Not declared |
| Architecture decisions | Not declared |
| Source code platform | GitHub; host and repositories not declared |
| Work tracking | GitHub Issues available; issue repository and conventions not declared |
| Document destinations | Not declared; follow existing project conventions |
| Change records and handoffs | Reuse existing records; fallback described in the workflow contract |
| Review and integration requirements | Not declared |
| Delivery and operational procedures | Not declared |

## GitHub context

Use the [GitHub workflow](github.md) and identify these project choices before the corresponding operation:

- GitHub host and code repository; issue repository if different.
- Default branch, task base branch and any integration or release branches.
- Existing issue and pull request templates, labels, ownership and project fields.
- Branch naming, commit conventions and review requirements.
- Available authenticated tools and supported features on the actual GitHub installation.
- Required checks and delivery procedures, whether they run in GitHub Actions or another system.
- Definition of issue completion: merged, released or operationally verified.

Record references to existing sources instead of introducing a parallel set of conventions. GitHub Issues are an available planning destination; a source code branch remains an execution artifact rather than a replacement for acceptance criteria.

## Per module

When onboarding a module, record its location and pointers to the following sources. Keep executable configuration authoritative for versions and commands rather than copying those values here.

- Language, framework and workload.
- Technical documentation and specialized conventions.
- Build, test and analysis procedure sources.
- Validation working directory and environment requirements.
- System and data classification under applicable policies.
- Contracts with other modules and integration validation.
- Authorized test data and required access.

References can point to existing documentation. Use the [module profile template](templates/module-profile.md) when a module needs a navigation map, and list each profile's module path and source location here. Onboarding is sufficient when an agent can locate the context for a real task and the team has resolved conflicts that prevent its execution.
