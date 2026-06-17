import type { Hook, HookCategory } from "@/types/hook";

const categoryConfig: Record<
  HookCategory,
  { badgeStyle: React.CSSProperties; accentColor: string }
> = {
  PreToolUse: {
    badgeStyle: { backgroundColor: "rgba(106,155,204,0.12)", color: "#6a9bcc" },
    accentColor: "#6a9bcc",
  },
  PostToolUse: {
    badgeStyle: { backgroundColor: "rgba(120,140,93,0.12)", color: "#788c5d" },
    accentColor: "#788c5d",
  },
  Stop: {
    badgeStyle: {
      backgroundColor: "rgba(217,119,87,0.12)",
      color: "#d97757",
    },
    accentColor: "#d97757",
  },
  SessionStart: {
    badgeStyle: {
      backgroundColor: "rgba(120,140,93,0.12)",
      color: "#788c5d",
    },
    accentColor: "#788c5d",
  },
  Notification: {
    badgeStyle: { backgroundColor: "rgba(106,155,204,0.12)", color: "#6a9bcc" },
    accentColor: "#6a9bcc",
  },
  SubAgent: {
    badgeStyle: {
      backgroundColor: "rgba(217,119,87,0.12)",
      color: "#d97757",
    },
    accentColor: "#d97757",
  },
};

export default function HookCard({ hook, index = 0 }: { hook: Hook; index?: number }) {
  const { badgeStyle, accentColor } = categoryConfig[hook.category];
  const delay = `${0.05 + index * 0.06}s`;

  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{ backgroundColor: "#ffffff", borderColor: "#e8e6dc", animation: `fade-up 0.5s ease ${delay} both` }}
    >
      {/* Colored accent top bar */}
      <div className="h-1 w-full" style={{ backgroundColor: accentColor }} />

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h2
            className="text-sm font-semibold leading-snug"
            style={{
              color: "#141413",
              fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif",
            }}
          >
            {hook.name}
          </h2>
          <span
            className="shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium"
            style={{
              ...badgeStyle,
              fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif",
            }}
          >
            {hook.category}
          </span>
        </div>

        <p
          className="line-clamp-3 text-sm leading-relaxed"
          style={{
            color: "#b0aea5",
            fontFamily: "var(--font-lora), Lora, Georgia, serif",
          }}
        >
          {hook.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2">
          {hook.author && (
            <span
              className="text-xs"
              style={{
                color: "#b0aea5",
                fontFamily: "var(--font-lora), Lora, Georgia, serif",
              }}
            >
              {hook.author}
            </span>
          )}
          <a
            href={hook.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
            style={{
              backgroundColor: "#141413",
              color: "#faf9f5",
              fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#d97757")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#141413")
            }
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
