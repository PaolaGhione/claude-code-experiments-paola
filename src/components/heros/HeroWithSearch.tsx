"use client";

import { useState } from "react";

const CATEGORIES = ["Safety", "Productivity", "Linting", "Formatting"] as const;
type Category = (typeof CATEGORIES)[number];

export default function HeroWithSearch() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  function handleCategoryClick(cat: Category) {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  }

  return (
    <header className="relative overflow-hidden bg-zinc-950 border-b border-white/[.08]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-950/50 via-zinc-950 to-indigo-950/30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-medium text-violet-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
          Open source · Community driven
        </div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Hook
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Hub
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-lg text-base text-zinc-400 sm:text-lg">
          Discover, copy, and contribute{" "}
          <span className="text-zinc-200">Claude Code hooks</span>. Automate
          your workflow, enforce safety guardrails, and supercharge AI-assisted
          development.
        </p>

        <div className="mx-auto mb-4 max-w-lg">
          <div className="flex items-center gap-3 rounded-full border border-white/[.08] bg-zinc-900 px-4 py-3 ring-offset-zinc-950 focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2 transition-shadow">
            <svg
              className="h-4 w-4 shrink-0 text-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search hooks…"
              aria-label="Search hooks"
              className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
            />

            <kbd className="hidden shrink-0 items-center gap-1 rounded border border-white/[.08] bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 sm:inline-flex">
              <span className="text-xs">⌘</span>K
            </kbd>
            <kbd className="inline-flex shrink-0 items-center rounded border border-white/[.08] bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500 sm:hidden">
              /
            </kbd>
          </div>
        </div>

        <div className="mx-auto mb-10 flex max-w-lg flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryClick(cat)}
                className={[
                  "rounded-full border px-3.5 py-1 text-xs font-medium transition-colors",
                  isActive
                    ? "border-violet-500/60 bg-violet-500/20 text-violet-300"
                    : "border-white/[.08] bg-zinc-900 text-zinc-400 hover:border-violet-500/30 hover:text-violet-300",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>

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
  );
}
