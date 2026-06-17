export default function HeroMinimal() {
  return (
    <header className="bg-zinc-950 border-b border-white/[.06]">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <p className="mb-5 text-xs font-medium uppercase tracking-widest text-zinc-500">
          Open source · Community driven
        </p>
        <h1 className="mb-5 text-5xl font-bold leading-none tracking-tight text-white sm:text-7xl">
          Hook
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Hub
          </span>
        </h1>
        <p className="mb-10 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
          Discover, copy, and contribute{" "}
          <span className="text-zinc-200">Claude Code hooks</span>. Automate
          your workflow, enforce safety guardrails, and supercharge AI-assisted
          development.
        </p>
        <p className="text-sm text-zinc-500">
          <span className="font-semibold text-zinc-200">12</span>{" "}
          <span className="mr-4">hooks</span>
          <span className="font-semibold text-zinc-200">4</span>{" "}
          <span className="mr-4">categories</span>
          <span className="font-semibold text-zinc-200">100%</span>{" "}
          <span>open source</span>
        </p>
      </div>
    </header>
  );
}
