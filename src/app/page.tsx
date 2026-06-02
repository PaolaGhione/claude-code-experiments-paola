"use client";

import { useState } from "react";
import type { HookCategory } from "@/types/hook";
import { hooks } from "@/data/hooks";
import HookCard from "@/components/HookCard";
import CategoryFilter from "@/components/CategoryFilter";

type FilterValue = "All" | HookCategory;

export default function Home() {
  const [selected, setSelected] = useState<FilterValue>("All");

  const visible =
    selected === "All" ? hooks : hooks.filter((h) => h.category === selected);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-black/[.08] bg-white dark:border-white/[.08] dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            HookHub
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Open-source Claude Code hooks, all in one place
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <div className="mb-6">
          <CategoryFilter selected={selected} onChange={setSelected} />
        </div>

        {visible.length === 0 ? (
          <p className="text-sm text-zinc-400">No hooks in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((hook) => (
              <HookCard key={hook.name} hook={hook} />
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-black/[.08] bg-white py-6 dark:border-white/[.08] dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between text-xs text-zinc-400">
          <span>HookHub — community Claude Code hooks</span>
          <a
            href="https://docs.anthropic.com/en/docs/claude-code/hooks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-600 dark:hover:text-zinc-200 transition"
          >
            Claude Code docs →
          </a>
        </div>
      </footer>
    </div>
  );
}
