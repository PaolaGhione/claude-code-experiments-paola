import type { Hook, HookCategory } from "@/types/hook";

const categoryStyles: Record<HookCategory, string> = {
  PreToolUse: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  PostToolUse: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Stop: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  SessionStart: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  Notification: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  SubAgent: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
};

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-black/[.08] bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/[.1] dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {hook.name}
        </h2>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryStyles[hook.category]}`}
        >
          {hook.category}
        </span>
      </div>

      <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {hook.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2">
        {hook.author && (
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            by {hook.author}
          </span>
        )}
        <a
          href={hook.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          View repo
        </a>
      </div>
    </div>
  );
}
