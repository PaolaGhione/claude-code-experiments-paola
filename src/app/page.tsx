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
      <header className="relative overflow-hidden bg-zinc-950 border-b border-white/[.08]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-950/50 via-zinc-950 to-indigo-950/30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-medium text-violet-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            Open source · Community driven
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Hook
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Hub
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-lg text-base text-zinc-400 sm:text-lg">
            Discover, copy, and contribute{" "}
            <span className="text-zinc-200">Claude Code hooks</span>. Automate
            your workflow, enforce safety guardrails, and supercharge
            AI-assisted development.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-zinc-500">hooks</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-zinc-500">categories</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-zinc-500">open source</div>
            </div>
          </div>
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
