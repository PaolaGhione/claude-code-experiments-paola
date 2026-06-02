import type { HookCategory } from "@/types/hook";

const ALL = "All" as const;
type FilterValue = typeof ALL | HookCategory;

const categories: HookCategory[] = [
  "PreToolUse",
  "PostToolUse",
  "SessionStart",
  "Stop",
  "Notification",
  "SubAgent",
];

export default function CategoryFilter({
  selected,
  onChange,
}: {
  selected: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  const options: FilterValue[] = [ALL, ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
            selected === option
              ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
              : "border-black/[.08] bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-white/[.1] dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
