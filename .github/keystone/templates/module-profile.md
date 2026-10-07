# Module context profile

Create a profile only when existing project sources do not already provide these pointers. Link it from `project-context.md`. Keep versions, commands and policy in their authoritative configuration; this profile is a navigation map, not executable configuration.

| Context | Authoritative source or unresolved owner |
|---|---|
| Module location and owner | Not declared |
| Language and configured version | Not declared |
| Framework and configured version | Not declared |
| Workload: API, batch, library, UI or other | Not declared |
| Standards and domain vocabulary | Not declared |
| Public contracts and affected consumers | Not declared |
| Unit/behavior test procedure | Not declared |
| Integration and compatibility validation | Not declared |
| Build, static analysis and required security checks | Not declared |
| Procedure working directory and environment | Not declared |
| Authorized input data and external access | Not declared |
| Delivery, health checks and recovery | Not declared |

For each applicable procedure, identify its source, purpose, working directory, prerequisites, expected success/failure signal and evidence destination. Resolve blocking unknowns before its execution. A Java/Spring Batch module and a Python service can use the same skills with different procedure and contract sources. Cross-module work needs one shared integration check and the evidence for each affected module.
