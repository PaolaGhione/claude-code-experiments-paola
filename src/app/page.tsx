"use client";

import { useState } from "react";
import type { HookCategory } from "@/types/hook";
import { hooks } from "@/data/hooks";
import HookCard from "@/components/HookCard";
import CategoryFilter from "@/components/CategoryFilter";
import HeroWithSearch from "@/components/heros/HeroWithSearch";
import Footer from "@/components/Footer";

type FilterValue = "All" | HookCategory;

export default function Home() {
  const [selected, setSelected] = useState<FilterValue>("All");

  const visible =
    selected === "All" ? hooks : hooks.filter((h) => h.category === selected);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#faf9f5" }}
    >
      <HeroWithSearch hookCount={hooks.length} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        <div className="mb-6">
          <CategoryFilter selected={selected} onChange={setSelected} />
        </div>

        {visible.length === 0 ? (
          <p
            className="text-sm"
            style={{
              color: "#b0aea5",
              fontFamily: "var(--font-lora), Lora, Georgia, serif",
            }}
          >
            No hooks in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((hook, i) => (
              <HookCard key={hook.name} hook={hook} index={i} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
