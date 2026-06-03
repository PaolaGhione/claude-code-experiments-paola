import type { Hook, HookCategory } from "@/types/hook";

const categoryConfig: Record<HookCategory, { badge: string; accent: string }> = {
  PreToolUse: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    accent: "bg-blue-500",
  },
  PostToolUse: {
    badge: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    accent: "bg-green-500",
  },
  Stop: {
    badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    accent: "bg-red-500",
  },
  SessionStart: {
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    accent: "bg-yellow-500",
  },
  Notification: {
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    accent: "bg-purple-500",
  },
  SubAgent: {
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    accent: "bg-orange-500",
  },
};

export default function HookCard({ hook }: { hook: Hook }) {
  const { badge, accent } = categoryConfig[hook.category];

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-black/[.06] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.08] dark:bg-zinc-900">
      <div className={`h-1 w-full ${accent}`} />

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-sm font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
            {hook.name}
          </h2>
          <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${badge}`}>
            {hook.category}
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {hook.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2">
          {hook.author && (
            <span className="text-xs text-zinc-400 dark:text-zinc-500">
              {hook.author}
            </span>
          )}
          <a
            href={hook.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            View repo
            <svg className="size-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
