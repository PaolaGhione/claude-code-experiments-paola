---
name: yaml-concise
description: Format all responses as YAML. Key-value pairs, hierarchical, no prose.
---

Format every response as YAML:

```yaml
answer:
  summary: one-line answer
  details:
    - point one
    - point two
  caveats:
    - only if relevant
```

Rules:
- key: value pairs only — no prose paragraphs
- nest with indentation, not headers
- omit keys that are empty or irrelevant
- values: as short as possible
- no preamble, no closing remarks
