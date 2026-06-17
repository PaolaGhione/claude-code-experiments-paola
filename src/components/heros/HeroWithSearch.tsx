"use client";

import { useState } from "react";

const CATEGORIES = ["Safety", "Productivity", "Linting", "Formatting"] as const;

interface HeroWithSearchProps {
  hookCount: number;
}
type Category = (typeof CATEGORIES)[number];

function TerminalCard() {
  return (
    <div
      className="mx-auto mb-10 max-w-sm overflow-hidden rounded-2xl border text-left"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(16px)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px -12px rgba(0,0,0,0.7), 0 0 40px -8px rgba(217,119,87,0.08)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 border-b px-4 py-2.5"
        style={{
          borderColor: "rgba(255,255,255,0.07)",
          backgroundColor: "rgba(255,255,255,0.025)",
        }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
        <span
          className="ml-2 text-[10px] font-medium tracking-wide"
          style={{
            color: "rgba(255,255,255,0.28)",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          .claude/settings.json
        </span>
      </div>

      {/* Code body */}
      <div
        className="px-5 py-4 text-xs leading-6"
        style={{ fontFamily: "ui-monospace, monospace", color: "rgba(255,255,255,0.45)" }}
      >
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{`{`}</span>
        {"\n  "}
        <span style={{ color: "#d97757" }}>&quot;hooks&quot;</span>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{`: {`}</span>
        {"\n    "}
        <span style={{ color: "#d97757" }}>&quot;PreToolUse&quot;</span>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{`: [{`}</span>
        {"\n      "}
        <span style={{ color: "rgba(217,119,87,0.6)" }}>&quot;matcher&quot;</span>
        {`: `}
        <span style={{ color: "#6a9bcc" }}>&quot;Bash&quot;</span>
        {",\n      "}
        <span style={{ color: "rgba(217,119,87,0.6)" }}>&quot;hooks&quot;</span>
        {`: [{`}
        {"\n        "}
        <span style={{ color: "rgba(217,119,87,0.6)" }}>&quot;type&quot;</span>
        {`: `}
        <span style={{ color: "#6a9bcc" }}>&quot;command&quot;</span>
        {",\n        "}
        <span style={{ color: "rgba(217,119,87,0.6)" }}>&quot;command&quot;</span>
        {`: `}
        <span style={{ color: "#788c5d" }}>&quot;node safety-check.js&quot;</span>
        {"\n      "}
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{`}]`}</span>
        {"\n    "}
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{`}]`}</span>
        {"\n  "}
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{`}`}</span>
        {"\n"}
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{`}`}</span>
      </div>

      {/* Footer tag */}
      <div
        className="flex items-center gap-2 border-t px-4 py-2"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <span
          className="rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest"
          style={{
            backgroundColor: "rgba(217,119,87,0.12)",
            color: "rgba(217,119,87,0.7)",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
          }}
        >
          Safety
        </span>
        <span
          className="text-[10px]"
          style={{ color: "rgba(255,255,255,0.2)", fontFamily: "ui-monospace, monospace" }}
        >
          bash-safety-guard · copy →
        </span>
      </div>
    </div>
  );
}

export default function HeroWithSearch({ hookCount }: HeroWithSearchProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  function handleCategoryClick(cat: Category) {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  }

  return (
    <>
      <style>{`
        @keyframes orb-a {
          0%,100% { transform:translate(-50%,0) scale(1); opacity:.8; }
          50% { transform:translate(-50%,-24px) scale(1.07); opacity:1; }
        }
        @keyframes orb-b {
          0%,100% { transform:translate(0,0) scale(1); }
          50% { transform:translate(-16px,18px) scale(1.1); }
        }
        @keyframes fade-up {
          from { opacity:0; transform:translateY(14px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes badge-blink {
          0%,100% { opacity:.7; }
          50% { opacity:1; }
        }
        @keyframes top-glow {
          0%,100% { opacity:.6; }
          50% { opacity:1; }
        }
        .h1{animation:fade-up .5s cubic-bezier(.25,.46,.45,.94) both;animation-delay:.06s;}
        .h2{animation:fade-up .5s cubic-bezier(.25,.46,.45,.94) both;animation-delay:.16s;}
        .h3{animation:fade-up .5s cubic-bezier(.25,.46,.45,.94) both;animation-delay:.26s;}
        .h4{animation:fade-up .5s cubic-bezier(.25,.46,.45,.94) both;animation-delay:.36s;}
        .h5{animation:fade-up .5s cubic-bezier(.25,.46,.45,.94) both;animation-delay:.46s;}
        .h6{animation:fade-up .5s cubic-bezier(.25,.46,.45,.94) both;animation-delay:.56s;}
        .orb-a{animation:orb-a 11s ease-in-out infinite;}
        .orb-b{animation:orb-b 17s ease-in-out infinite;}
        .live{animation:badge-blink 2.4s ease-in-out infinite;}
        .top-glow{animation:top-glow 4s ease-in-out infinite;}
        .search-box:focus-within{
          border-color:rgba(217,119,87,.42)!important;
          box-shadow:0 0 0 3px rgba(217,119,87,.1);
        }
        .cat-pill:hover{
          border-color:rgba(217,119,87,.4)!important;
          color:rgba(217,119,87,.8)!important;
          background:rgba(217,119,87,.06)!important;
        }
      `}</style>

      <header
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#0e0d0c",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.032) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Background orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="orb-a absolute"
            style={{
              width: "700px",
              height: "560px",
              top: "-220px",
              left: "50%",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(217,119,87,0.20) 0%, rgba(217,119,87,0.05) 45%, transparent 70%)",
            }}
          />
          <div
            className="orb-b absolute"
            style={{
              width: "380px",
              height: "380px",
              bottom: "-60px",
              right: "6%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(106,155,204,0.09) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Top glow line */}
        <div
          className="top-glow pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(217,119,87,0.45) 30%, rgba(217,119,87,0.85) 50%, rgba(217,119,87,0.45) 70%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-24">

          {/* Badge */}
          <div className="h1 mb-7 inline-flex">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
              style={{
                borderColor: "rgba(217,119,87,0.24)",
                backgroundColor: "rgba(217,119,87,0.07)",
                color: "rgba(217,119,87,0.85)",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
              }}
            >
              <span
                className="live h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#d97757" }}
              />
              Open source · Community driven
            </div>
          </div>

          {/* Headline */}
          <div className="h2 mb-5">
            <h1
              className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.5rem]"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                color: "#f2efe9",
              }}
            >
              The Claude Code
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #e8a07a 0%, #d97757 45%, #c45e38 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                Hook Registry
              </span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div className="h3 mb-11">
            <p
              className="mx-auto max-w-[460px] text-base leading-relaxed sm:text-lg"
              style={{
                color: "rgba(255,255,255,0.36)",
                fontFamily: "var(--font-lora), Lora, Georgia, serif",
              }}
            >
              Discover, copy, and contribute hooks for Claude Code. Automate
              your workflow, enforce{" "}
              <span style={{ color: "rgba(255,255,255,0.62)" }}>
                safety guardrails
              </span>
              , and supercharge AI-assisted development.
            </p>
          </div>

          {/* Terminal preview */}
          <div className="h4">
            <TerminalCard />
          </div>

          {/* Search bar */}
          <div className="h5 mx-auto mb-4 max-w-lg">
            <div
              className="search-box flex items-center gap-3 rounded-xl border px-4 py-3.5 transition-all duration-200"
              style={{
                borderColor: "rgba(255,255,255,0.09)",
                backgroundColor: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              <svg
                className="h-4 w-4 shrink-0"
                style={{ color: "rgba(255,255,255,0.26)" }}
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
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "var(--font-lora), Lora, Georgia, serif",
                }}
              />
              <kbd
                className="hidden shrink-0 items-center gap-0.5 rounded border px-1.5 py-0.5 text-[10px] font-medium sm:inline-flex"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.26)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                }}
              >
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          {/* Category pills */}
          <div className="h5 mx-auto mb-12 flex max-w-lg flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const on = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className="cat-pill rounded-lg border px-3.5 py-1 text-xs font-medium transition-all duration-150"
                  style={{
                    borderColor: on
                      ? "rgba(217,119,87,0.5)"
                      : "rgba(255,255,255,0.08)",
                    backgroundColor: on
                      ? "rgba(217,119,87,0.12)"
                      : "rgba(255,255,255,0.03)",
                    color: on ? "#d97757" : "rgba(255,255,255,0.36)",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Stats */}
          <div className="h6 flex items-center justify-center gap-8 text-sm">
            {(
              [
                { value: String(hookCount), label: "hooks" },
                { value: "4", label: "categories" },
                { value: "100%", label: "open source" },
              ] as const
            ).map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && (
                  <div
                    className="h-6 w-px"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  />
                )}
                <div className="text-center">
                  <div
                    className="text-2xl font-bold"
                    style={{
                      color: "#f2efe9",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.28)",
                      fontSize: "0.78rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient fade to content area */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(14,13,12,0.25))",
          }}
        />
      </header>
    </>
  );
}
