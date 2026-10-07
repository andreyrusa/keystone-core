# Third-party notices

Keystone Core v0.2 contains original instructions adapted from practices in [Matt Pocock's skills repository](https://github.com/mattpocock/skills). It is not an official product or a behavior-preserving fork of that collection.

Sources were consulted on 5 October 2026 at commit [`4588b32ecab9ecc9fc8cc6b6c5e7d675b6004b0d`](https://github.com/mattpocock/skills/tree/4588b32ecab9ecc9fc8cc6b6c5e7d675b6004b0d). The original license is retained in [LICENSE.mattpocock](LICENSE.mattpocock).

## Source mapping

Paths below are relative to that pinned repository snapshot.

| Keystone skill | Reference sources | Retained practice |
|---|---|---|
| `keystone-discover` | `skills/engineering/grill-with-docs/SKILL.md`, `skills/productivity/grilling/SKILL.md`, `skills/engineering/domain-modeling/SKILL.md` | Decision-led interviews and shared domain language |
| `keystone-design` | `skills/engineering/codebase-design/SKILL.md`, `skills/engineering/domain-modeling/SKILL.md` | Understandable interfaces, testability and contextual decisions |
| `keystone-plan` | `skills/engineering/to-spec/SKILL.md`, `skills/engineering/to-tickets/SKILL.md` | Synthesis, verifiable tasks and dependencies |
| `keystone-build` | `skills/engineering/implement/SKILL.md`, `skills/engineering/tdd/SKILL.md` | Observable increments and behavior tests |
| `keystone-review` | `skills/engineering/code-review/SKILL.md` | Separate specification and standards assessments |
| `keystone-deliver` | Original extension | Delivery preparation, authorization and verification |
| `keystone-retro` | `skills/engineering/retro/SKILL.md` | Environmental improvement and deterministic checks |
| `keystone-diagnose` | `skills/engineering/diagnosing-bugs/SKILL.md` | Reproduction before selecting a correction |

## Deliberate adaptations

- Self-contained instructions use shared project context without requiring the original skills or a vendor-specific invocation tool.
- Relevance-based discovery supports existing agents; users choose transitions between activities.
- GitHub is the selected source code platform and GitHub Issues is supported for planning. Documentation follows agreed project destinations, with a conversational draft when publication is unavailable or not requested.
- Review retains two axes and supports a single session and requested working changes; subagents are optional.
- Implementation, review and delivery are distinct activities. There is no universal commit instruction or automatic transition.
- Specification size is proportional to the change. Alternative checks must explain applicability and limitations.
- Enterprise requirements come from actual organizational and module sources, without invented regulatory thresholds or universal policies.
- v0.2 adds original change-record/handoff and module-profile references, installation utilities and a deferred end-to-end pilot specification. These additions are not imported executable tools from the upstream repository.

Review upstream changes against these adaptations before incorporating them. The commit identifies consulted sources; it does not configure automatic updates.

Attribution is confined to this notice and the original license, separately from operational skill definitions.
