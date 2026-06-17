"use client";

import { useState } from "react";

const CATEGORIES = ["Safety", "Productivity", "Linting", "Formatting"] as const;
type Category = (typeof CATEGORIES)[number];

function HookHubLogo() {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      {/* Logomark: geometric hook inside a rounded square */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        style={{ animation: "logo-float 3.5s ease-in-out infinite" }}
      >
        <rect width="48" height="48" rx="11" fill="#d97757" />
        {/* Hook shape: vertical stem + J-curve */}
        <path
          d="M18 12 L18 30 Q18 38 26 38 Q34 38 34 30"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Short top crossbar */}
        <path
          d="M13 12 L23 12"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      <h1
        className="text-5xl font-bold tracking-tight sm:text-6xl"
        style={{ fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif" }}
      >
        <span style={{ color: "#141413" }}>Hook</span>
        <span style={{ color: "#d97757" }}>Hub</span>
      </h1>
    </div>
  );
}

export default function HeroWithSearch() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  function handleCategoryClick(cat: Category) {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  }

  return (
    <header
      className="relative overflow-hidden border-b"
      style={{ backgroundColor: "#faf9f5", borderColor: "#e8e6dc" }}
    >
      {/* Subtle warm radial glow behind the logo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(217,119,87,0.07) 0%, transparent 70%)",
          animation: "glow-breathe 4s ease-in-out infinite",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
        {/* Open-source badge */}
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-medium"
          style={{
            borderColor: "rgba(217,119,87,0.25)",
            backgroundColor: "rgba(217,119,87,0.07)",
            color: "#d97757",
            fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif",
            animation: "fade-up 0.5s ease 0.05s both",
          }}
        >
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ backgroundColor: "#d97757" }}
          />
          Open source · Community driven
        </div>

        <div style={{ animation: "fade-up 0.5s ease 0.2s both" }}>
          <HookHubLogo />
        </div>

        <p
          className="mx-auto mb-8 max-w-lg text-base sm:text-lg"
          style={{
            color: "#b0aea5",
            fontFamily: "var(--font-lora), Lora, Georgia, serif",
            animation: "fade-up 0.5s ease 0.35s both",
          }}
        >
          Discover, copy, and contribute{" "}
          <span style={{ color: "#141413" }}>Claude Code hooks</span>. Automate
          your workflow, enforce safety guardrails, and supercharge AI-assisted
          development.
        </p>

        {/* Search bar */}
        <div className="mx-auto mb-4 max-w-lg" style={{ animation: "fade-up 0.5s ease 0.48s both" }}>
          <div
            className="flex items-center gap-3 rounded-full border px-4 py-3 transition-shadow focus-within:shadow-md"
            style={{
              borderColor: "#e8e6dc",
              backgroundColor: "#ffffff",
              outlineColor: "#d97757",
            }}
          >
            <svg
              className="h-4 w-4 shrink-0"
              style={{ color: "#b0aea5" }}
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
              className="min-w-0 flex-1 bg-transparent text-sm focus:outline-none"
              style={{
                color: "#141413",
                fontFamily: "var(--font-lora), Lora, Georgia, serif",
              }}
            />

            <kbd
              className="hidden shrink-0 items-center gap-1 rounded border px-1.5 py-0.5 text-[10px] font-medium sm:inline-flex"
              style={{
                borderColor: "#e8e6dc",
                backgroundColor: "#faf9f5",
                color: "#b0aea5",
              }}
            >
              <span className="text-xs">⌘</span>K
            </kbd>
            <kbd
              className="inline-flex shrink-0 items-center rounded border px-1.5 py-0.5 text-[10px] font-medium sm:hidden"
              style={{
                borderColor: "#e8e6dc",
                backgroundColor: "#faf9f5",
                color: "#b0aea5",
              }}
            >
              /
            </kbd>
          </div>
        </div>

        {/* Quick category filters */}
        <div className="mx-auto mb-10 flex max-w-lg flex-wrap items-center justify-center gap-2" style={{ animation: "fade-up 0.5s ease 0.58s both" }}>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryClick(cat)}
                className="rounded-full border px-3.5 py-1 text-xs font-medium transition-colors"
                style={{
                  borderColor: isActive ? "#d97757" : "#e8e6dc",
                  backgroundColor: isActive
                    ? "rgba(217,119,87,0.10)"
                    : "#ffffff",
                  color: isActive ? "#d97757" : "#b0aea5",
                  fontFamily:
                    "var(--font-poppins), Poppins, Arial, sans-serif",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 text-sm" style={{ animation: "fade-up 0.5s ease 0.68s both" }}>
          <div className="text-center">
            <div
              className="text-2xl font-bold"
              style={{
                color: "#141413",
                fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif",
              }}
            >
              12
            </div>
            <div style={{ color: "#b0aea5" }}>hooks</div>
          </div>
          <div className="h-8 w-px" style={{ backgroundColor: "#e8e6dc" }} />
          <div className="text-center">
            <div
              className="text-2xl font-bold"
              style={{
                color: "#141413",
                fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif",
              }}
            >
              4
            </div>
            <div style={{ color: "#b0aea5" }}>categories</div>
          </div>
          <div className="h-8 w-px" style={{ backgroundColor: "#e8e6dc" }} />
          <div className="text-center">
            <div
              className="text-2xl font-bold"
              style={{
                color: "#141413",
                fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif",
              }}
            >
              100%
            </div>
            <div style={{ color: "#b0aea5" }}>open source</div>
          </div>
        </div>
      </div>
    </header>
  );
}
