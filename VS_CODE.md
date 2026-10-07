# Use Keystone in VS Code

## Install in a repository

Use a VS Code installation with GitHub Copilot agent skills support, an approved Copilot account and the team's enabled tools. Review the package before use. The optional installer needs Node.js 18+ and Git; the skills themselves need neither helper script.

From the unpacked package, preview installation into an existing Git repository root:

```text
node tools/install.mjs "<repository-root>"
```

Review the listed additions, then apply them:

```text
node tools/install.mjs "<repository-root>" --apply
```

The installer adds `.github/skills/` and `.github/keystone/`. Identical files are left untouched. Differing files, linked destinations and non-directory parents are reported before additions. Merge conflicting versions manually; there is no overwrite flag. It preserves existing agents and `.github/copilot-instructions.md`. For manual installation, copy the same folders together and review existing differences first.

Open the target repository in VS Code. Use `/skills` or Configure Skills to confirm that all eight Keystone skills are available, then select them from the slash-command menu. Skill discovery and supported locations are described in [the VS Code documentation](https://code.visualstudio.com/docs/agent-customization/agent-skills).

## Connect the team's existing agents

Keep each agent's role, technical specialization and tool permissions. Add a conditional pointer only where useful. From an agent file in `.github/agents/`, an implementation pointer can read:

> When implementing a defined task, read `../skills/keystone-build/SKILL.md` and follow its project-context and handoff contract within the requested activity.

Use the corresponding skill for design, review, diagnosis or other work. Relevance-based discovery remains enabled; explicitly invoking a phase selects the requested activity. A loaded skill supplies a method and preserves the invoking agent's tool boundaries. It cannot enforce permissions by itself.

## Configure project context

Update `.github/keystone/project-context.md` with pointers to existing project sources: owners, standards, policies, GitHub targets, review/check requirements, change records and delivery procedures. Discover actual versions and commands from configuration. Use the module profile template only where a navigation map is needed.

Each affected module supplies its language, framework, workload, procedure sources, contracts and authorized environment/data. A single task can use several profiles. The skills coordinate criteria and integration evidence without requiring the same commands or technical conventions across Java, Spring Batch, Python, Node, Scala or other stacks.

## Run a guided change

Replace the record path and task ID below with actual artifacts produced for the change. Existing agreements can satisfy prerequisites; users do not need to repeat information already available.

| Activity to select | Example invocation |
|---|---|
| Define a change | `/keystone-discover <request>; use a durable change record` |
| Resolve contracts | `/keystone-design #file:.keystone/changes/<id>.md` |
| Prepare tasks/issues | `/keystone-plan #file:.keystone/changes/<id>.md; prepare issues` |
| Publish an agreed plan | `/keystone-plan #file:.keystone/changes/<id>.md; publish the agreed issues in <repository>` |
| Implement selected work | `/keystone-build #file:.keystone/changes/<id>.md task <task-id>` |
| Prepare/publish the PR | `/keystone-build #file:.keystone/changes/<id>.md task <task-id>; publish its PR in <repository>` |
| Review the actual change | `/keystone-review #file:.keystone/changes/<id>.md and <PR or comparison>` |
| Prepare delivery | `/keystone-deliver #file:.keystone/changes/<id>.md prepare` |
| Execute authorized delivery | `/keystone-deliver #file:.keystone/changes/<id>.md; execute <operation> to <target> under <procedure>` |
| Assess the session | `/keystone-retro #file:.keystone/changes/<id>.md` |
| Investigate a defect | `/keystone-diagnose <symptom>; use #file:.keystone/changes/<id>.md` |

At every handoff, inspect the outcome, actual artifacts, evidence and outstanding decisions, then choose the next activity. Delivery preparation is useful even when execution access is unavailable. Merge and deployment stay separate. A task is done only under the project's actual definition of done.

## Resume and failure handling

In a new chat, attach the saved record and request the specific phase/task. Copilot must compare the record with actual project/GitHub state before continuing. Changed requirements, contracts or code can invalidate downstream work or evidence. Failed checks leave the affected task pending; unavailable remote access leaves publication as a draft. Retried creations require checking existing state first.

For read-only work, an agent may return an unsaved record/handoff in chat. Save or attach that content before relying on it in another session. No chat history is assumed to be available.

The [pilot scenarios](PILOT.md) define the later behavioral and GitHub validation. Installation and format checks alone do not prove agent behavior.
