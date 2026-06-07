export default function Hero() {
  return (
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
  );
}
