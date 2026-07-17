# Hero Component Spec

## Purpose

The Hero is the top-of-page section that establishes HookHub's identity and communicates its value proposition at a glance. It is the first thing a visitor sees and must immediately convey what the product is, why it matters, and that it is open source and community driven.

## Goals

- **Brand identity** — display the "HookHub" name prominently with visual distinction between the two words.
- **Value proposition** — summarise in one or two sentences what the product does (discover, copy, and contribute Claude Code hooks).
- **Social proof / scale** — show key stats (number of hooks, categories, open-source status) to build trust and set expectations.
- **Visual tone** — feel modern, developer-focused, and polished. Dark background with subtle ambient glow is the established aesthetic.
- **No interactivity required** — the Hero is a purely presentational component. It receives no props and manages no state.

## Anatomy

| Element | Role |
|---|---|
| Wrapper `<header>` | Semantic landmark; contains all hero content and the background effects |
| Ambient glow layers | Two absolutely-positioned decorative `<div>`s that create a violet radial glow; purely visual, pointer-events disabled |
| Badge | Small pill above the headline — communicates "Open source · Community driven" with an animated pulse dot |
| Headline (`<h1>`) | Product name split so "Hook" is plain white and "Hub" carries the violet-to-indigo gradient |
| Subheading `<p>` | One-sentence description; "Claude Code hooks" is highlighted in a lighter colour |
| Stats row | Three numeric stats separated by vertical dividers: hooks count, categories count, open-source percentage |

## Visual Guidelines

- **Background**: dark (`bg-zinc-950`) with a violet/indigo gradient overlay and a large blurred radial glow centred at the top.
- **Headline size**: `text-5xl` on mobile, `text-6xl` on `sm` and up; bold, tight tracking.
- **Accent colour**: violet (`violet-400`) for the gradient text, pulse dot, badge border, and badge background tint. Indigo (`indigo-400`) as the gradient endpoint.
- **Body text**: `zinc-400` for secondary text; `zinc-200` or white for emphasis.
- **Stats**: large bold white numerals (`text-2xl font-bold`) with muted `zinc-500` labels beneath.
- **Max content width**: `max-w-6xl`, centred, with `px-6` horizontal padding.
- **Vertical padding**: `py-16` inside the content container.

## Content Guidelines

- The badge copy should stay short (one line) and reinforce community/open-source identity.
- The headline must always display "HookHub" as a single visual unit even if split across two styled spans.
- The subheading must name "Claude Code hooks" specifically — this is what differentiates the product.
- Stats must reflect real data; update the hardcoded numbers when the hook catalogue grows.

## Constraints

- **No props in the base implementation** — stats and copy are hardcoded. Variations may accept props (see below).
- **No client-side state** — the component must be renderable as a React Server Component unless a specific variation requires interactivity.
- **Accessibility** — the `<header>` landmark and `<h1>` must always be present and contain meaningful text. Decorative elements must not be reachable by assistive technology (`pointer-events-none`; no `aria` attributes needed on purely decorative divs).
- **Responsive** — must look correct from 320 px wide upwards without horizontal scroll.

## Variation Guidelines

When implementing alternative versions of this component, each variation should:

1. Preserve the **core anatomy** (badge, headline, subheading, stats) unless the variation explicitly documents what it omits and why.
2. Keep the **HookHub brand name** intact and legible.
3. Maintain the **dark header / light page body** contrast established by the rest of the layout.
4. Live in `src/components/heros/` and be named descriptively (e.g. `HeroMinimal.tsx`, `HeroAnimated.tsx`, `HeroWithSearch.tsx`).
5. Be importable as a drop-in replacement for `<Hero />` in `src/app/page.tsx` — same mount point, no layout changes required in the parent.

## Reference Implementation

`src/components/heros/Hero.tsx` — baseline, no props, fully static.
