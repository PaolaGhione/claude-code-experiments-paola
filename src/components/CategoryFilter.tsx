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
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
            style={{
              borderColor: isSelected ? "#d97757" : "#e8e6dc",
              backgroundColor: isSelected ? "#d97757" : "#ffffff",
              color: isSelected ? "#ffffff" : "#b0aea5",
              fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif",
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
