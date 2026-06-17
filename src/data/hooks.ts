import type { Hook } from "@/types/hook";

export const hooks: Hook[] = [
  {
    name: "Auto Prettier",
    category: "PostToolUse",
    description:
      "Runs Prettier on any file Claude edits, keeping formatting consistent without manual intervention.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["formatting", "prettier"],
  },
  {
    name: "Block rm -rf",
    category: "PreToolUse",
    description:
      "Denies any bash command containing `rm -rf`, preventing accidental recursive deletions during autonomous runs.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["security", "safety"],
  },
  {
    name: "Slack Notifier",
    category: "Stop",
    description:
      "Posts a Slack message to a configured channel when Claude finishes a task, so you can step away without missing completions.",
    repoUrl: "https://github.com/hesreallyhim/awesome-claude-code",
    author: "hesreallyhim",
    tags: ["notifications", "slack"],
  },
  {
    name: "Git Safety Commit",
    category: "PreToolUse",
    description:
      "Creates a temporary WIP commit before major changes, giving you an instant rollback point if something goes wrong.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["git", "safety"],
  },
  {
    name: "Type Check on Save",
    category: "PostToolUse",
    description:
      "Runs `tsc --noEmit` after any TypeScript file is edited, surfacing type errors before Claude moves on.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["typescript", "linting"],
  },
  {
    name: "Env File Guard",
    category: "PreToolUse",
    description:
      "Blocks any read or write to `.env` files, ensuring secrets are never accidentally leaked or overwritten.",
    repoUrl: "https://github.com/hesreallyhim/awesome-claude-code",
    author: "hesreallyhim",
    tags: ["security", "secrets"],
  },
  {
    name: "Test Runner",
    category: "PostToolUse",
    description:
      "Automatically runs Jest after test file changes, giving instant feedback on whether the new code passes.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["testing", "jest"],
  },
  {
    name: "Session Logger",
    category: "SessionStart",
    description:
      "Logs the session ID, working directory, and timestamp to a local file at the start of every Claude session.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["logging", "observability"],
  },
  {
    name: "OS Notification",
    category: "Stop",
    description:
      "Sends a native desktop notification when Claude finishes responding, useful when running long background tasks.",
    repoUrl: "https://github.com/hesreallyhim/awesome-claude-code",
    author: "hesreallyhim",
    tags: ["notifications", "desktop"],
  },
  {
    name: "Lint on Edit",
    category: "PostToolUse",
    description:
      "Runs ESLint after any JS or TS file change, enforcing code style rules automatically on every Claude edit.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler",
    tags: ["linting", "eslint"],
  },
  {
    name: "Dangerous Command Blocker",
    category: "PreToolUse",
    description:
      "Intercepts a configurable list of dangerous shell patterns (`curl | sh`, `dd`, `mkfs`) and rejects them before execution.",
    repoUrl: "https://github.com/hesreallyhim/awesome-claude-code",
    author: "hesreallyhim",
    tags: ["security", "safety"],
  },
  {
    name: "Context Injector",
    category: "SessionStart",
    description:
      "Reads a `CONTEXT.md` file at session start and injects its contents into the conversation, giving Claude project-specific background automatically.",
    repoUrl: "https://github.com/hesreallyhim/awesome-claude-code",
    author: "hesreallyhim",
    tags: ["context", "productivity"],
  },
  {
    name: "Security Scanner",
    category: "PostToolUse",
    description:
      "Runs automated security scanning after file edits, part of the Everything Claude Code system's 20+ hook suite spanning safety, formatting, and multi-agent coordination.",
    repoUrl: "https://github.com/affaan-m/everything-claude-code",
    author: "affaan-m",
    tags: ["security", "safety"],
  },
  {
    name: "Hook Collection Browser",
    category: "SessionStart",
    description:
      "Entry point to awesome-claude-code's curated hooks directory covering notifications, safety, context injection, status lines, and orchestrators from many authors.",
    repoUrl: "https://github.com/hesreallyhim/awesome-claude-code",
    author: "hesreallyhim",
    tags: ["productivity", "context"],
  },
  {
    name: "Auto Git Stage",
    category: "PostToolUse",
    description:
      "Automatically stages edited files with `git add` after every Claude write, reducing manual staging steps during long autonomous sessions.",
    repoUrl: "https://github.com/rohitg00/awesome-claude-code-toolkit",
    author: "rohitg00",
    tags: ["git", "automation"],
  },
  {
    name: "Safe Command Patterns",
    category: "PreToolUse",
    description:
      "Tested, copy-paste-ready PreToolUse hooks that block dangerous shell patterns, protect secrets, and auto-stage git changes — designed to be minimal and easy to customize.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    author: "karanb192",
    tags: ["safety", "security", "git"],
  },
];
