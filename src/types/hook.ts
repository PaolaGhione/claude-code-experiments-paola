export type HookCategory =
  | "PreToolUse"
  | "PostToolUse"
  | "SessionStart"
  | "Stop"
  | "Notification"
  | "SubAgent";

export type Hook = {
  name: string;
  category: HookCategory;
  description: string;
  repoUrl: string;
  author?: string;
  tags?: string[];
};
