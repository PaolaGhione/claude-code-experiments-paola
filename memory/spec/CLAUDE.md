# HookHub — MVP Spec

## Context

Claude Code hooks are shell commands that fire at lifecycle events (PreToolUse, PostToolUse, SessionStart, Stop, etc.) during a Claude Code session. Unlike prompt instructions, hooks are **guaranteed to execute**, making them essential for enforcing team standards, blocking dangerous commands, auto-formatting, and workflow automation.

The open-source community is producing hooks, but there is no central place to discover them. HookHub fills that gap: a clean, browsable directory of community Claude Code hooks, MVP-scoped to display only.

---

## Goals

- Let developers discover open-source Claude Code hooks quickly
- Present hooks in a scannable grid with enough context to evaluate usefulness
- Link directly to the source repo for each hook
- Keep the build static/simple — no database, no auth, no user submissions in v1

---

## Data Model

Each hook is a typed object:

```ts
type Hook = {
  name: string;           // e.g. "Auto Prettier"
  category: HookCategory; // see categories below
  description: string;    // 1–2 sentences explaining what it does
  repoUrl: string;        // GitHub URL
  author?: string;        // optional GitHub username
  tags?: string[];        // optional e.g. ["formatting", "python"]
};

type HookCategory =
  | "PreToolUse"
  | "PostToolUse"
  | "SessionStart"
  | "Stop"
  | "Notification"
  | "SubAgent";
```

Hook data lives in a static file: `src/data/hooks.ts` — a plain exported array. No API, no DB.

---

## Pages & Routes

### `/` — Home (grid view)

**Layout:**
- Header: site name "HookHub", tagline "Open-source Claude Code hooks, all in one place"
- Category filter bar: pill/tab buttons for All + each category
- Hook grid: responsive, 1–3 columns depending on viewport
- Footer: link to Claude Code docs + "Submit a hook" placeholder (disabled in MVP)

**Hook Card (one per hook):**
- Hook name (bold)
- Category badge (color-coded pill)
- Description (2–3 lines max, truncated with ellipsis)
- "View repo" button → opens `repoUrl` in new tab

**Filtering:**
- Client-side filter by category using React state (no URL params needed for MVP)
- Default: show All

---

## Initial Seed Data (10–15 hooks)

Sourced from:
- `github.com/hesreallyhim/awesome-claude-code`
- `github.com/disler/claude-code-hooks-mastery`
- Dev.to: "10 Claude Code hooks from 108 hours of autonomous operation"

| Name | Category | Description |
|------|----------|-------------|
| Auto Prettier | PostToolUse | Runs Prettier on any file Claude edits |
| Block rm -rf | PreToolUse | Denies any bash command containing `rm -rf` |
| Slack Notifier | Stop | Sends a Slack message when Claude finishes a task |
| Git Safety Commit | PreToolUse | Creates a temp commit before major changes as a rollback point |
| Type Check on Save | PostToolUse | Runs `tsc --noEmit` after any TypeScript file is edited |
| Env File Guard | PreToolUse | Blocks reads/writes to `.env` files |
| Test Runner | PostToolUse | Runs Jest after test file changes |
| Session Logger | SessionStart | Logs session ID and working directory to a local file |
| OS Notification | Stop | Sends a native desktop notification when Claude finishes |
| Lint on Edit | PostToolUse | Runs ESLint after any JS/TS file change |

---

## Component Structure

| File | Purpose |
|------|---------|
| `src/types/hook.ts` | `Hook` and `HookCategory` type definitions |
| `src/data/hooks.ts` | Static seed array of hook objects |
| `src/components/HookCard.tsx` | Card UI for a single hook |
| `src/components/CategoryFilter.tsx` | Pill filter bar (All + each category) |
| `src/app/page.tsx` | Home page — assembles grid + filter |
| `src/app/layout.tsx` | Updated metadata (title, description) |

---

## Styling Notes

- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Cards: `rounded-xl border shadow-sm p-5 hover:shadow-md transition`
- Category badge colors (Tailwind):
  - `PreToolUse` → blue
  - `PostToolUse` → green
  - `Stop` → red
  - `SessionStart` → yellow
  - `Notification` → purple
  - `SubAgent` → orange
- Dark mode: inherit existing CSS custom properties (`--background`, `--foreground`) from `globals.css`

---

## Out of Scope (MVP)

- Hook submission form
- Search bar
- Hook detail / individual route
- Ratings or upvotes
- Database or CMS
- Authentication

---

## Verification

1. `npm run dev` → `http://localhost:3000` renders the hook grid
2. All seed hooks display with correct name, badge, and description
3. Category filter pills show/hide the correct cards
4. "All" resets the filter
5. "View repo" opens the correct GitHub URL in a new tab
6. `npm run build` completes without errors
7. `npm run lint` passes with no warnings
