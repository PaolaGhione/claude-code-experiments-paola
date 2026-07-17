export default function HeroAnimated() {
  return (
    <header className="relative overflow-hidden bg-zinc-950 border-b border-white/[.08]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-18px) translateX(8px); }
          66% { transform: translateY(-8px) translateX(-12px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(12px) translateX(-10px); }
          66% { transform: translateY(-14px) translateX(6px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0px); }
        }
        @keyframes fadeInUpSlow {
          0% { opacity: 0; transform: translateY(16px); }
          40% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        @keyframes fadeInUpStats {
          0% { opacity: 0; transform: translateY(12px); }
          60% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        @keyframes badgeShimmer {
          0% { background-position: -300% center; }
          100% { background-position: 300% center; }
        }
        @keyframes numberGlow {
          0%, 100% { text-shadow: 0 0 8px rgba(167, 139, 250, 0.3); }
          50% { text-shadow: 0 0 20px rgba(167, 139, 250, 0.7), 0 0 40px rgba(99, 102, 241, 0.3); }
        }
        @keyframes dividerPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
        .orb-float { animation: float 9s ease-in-out infinite; }
        .orb-float-reverse { animation: floatReverse 12s ease-in-out infinite; }
        .orb-float-slow { animation: float 15s ease-in-out infinite 3s; }
        .hero-badge { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero-headline { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
        .hero-sub { animation: fadeInUpSlow 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero-stats { animation: fadeInUpStats 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .badge-border {
          background: linear-gradient(90deg, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.7) 25%, rgba(99,102,241,0.9) 50%, rgba(139,92,246,0.7) 75%, rgba(139,92,246,0.3) 100%);
          background-size: 300% auto;
          animation: badgeShimmer 3.5s linear infinite;
        }
        .stat-number { animation: numberGlow 3s ease-in-out infinite; }
        .stat-number-delay1 { animation: numberGlow 3s ease-in-out infinite 1s; }
        .stat-number-delay2 { animation: numberGlow 3s ease-in-out infinite 2s; }
        .divider-pulse { animation: dividerPulse 2.5s ease-in-out infinite; }
        .divider-pulse-delay { animation: dividerPulse 2.5s ease-in-out infinite 0.8s; }
      `}</style>

      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-950/50 via-zinc-950 to-indigo-950/30" />

      {/* Primary ambient orb */}
      <div className="orb-float pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Secondary floating orb — top-left */}
      <div className="orb-float-reverse pointer-events-none absolute -left-32 top-1/4 h-[300px] w-[300px] rounded-full bg-violet-700/8 blur-[90px]" />

      {/* Tertiary floating orb — bottom-right */}
      <div className="orb-float-slow pointer-events-none absolute -right-24 bottom-0 h-[280px] w-[280px] rounded-full bg-indigo-600/8 blur-[80px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
        {/* Badge */}
        <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full p-px">
          <div className="badge-border absolute inset-0 rounded-full opacity-100" style={{ position: 'relative' }} />
          <div className="relative inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-medium text-violet-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            <span
              style={{
                background: 'linear-gradient(90deg, #c4b5fd 0%, #e0d9ff 40%, #a78bfa 60%, #c4b5fd 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 4s linear infinite',
              }}
            >
              Open source · Community driven
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-headline mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Hook
          <span
            style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #6366f1 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 5s linear infinite',
            }}
          >
            Hub
          </span>
        </h1>

        {/* Subheading */}
        <p className="hero-sub mx-auto mb-10 max-w-lg text-base text-zinc-400 sm:text-lg">
          Discover, copy, and contribute{' '}
          <span className="text-zinc-200">Claude Code hooks</span>. Automate your workflow, enforce safety guardrails, and supercharge AI-assisted development.
        </p>

        {/* Stats */}
        <div className="hero-stats flex items-center justify-center gap-8 text-sm">
          <div className="text-center">
            <div className="stat-number text-2xl font-bold text-white">12</div>
            <div className="text-zinc-500">hooks</div>
          </div>

          <div className="divider-pulse h-8 w-px bg-white/10" />

          <div className="text-center">
            <div className="stat-number-delay1 text-2xl font-bold text-white">4</div>
            <div className="text-zinc-500">categories</div>
          </div>

          <div className="divider-pulse-delay h-8 w-px bg-white/10" />

          <div className="text-center">
            <div className="stat-number-delay2 text-2xl font-bold text-white">100%</div>
            <div className="text-zinc-500">open source</div>
          </div>
        </div>
      </div>
    </header>
  );
}
