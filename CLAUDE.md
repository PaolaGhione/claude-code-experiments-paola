# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # run ESLint (flat config, v9)
```

No test runner is configured.

## Stack

- **Next.js 16.2.6** with App Router (`src/app/`) — see AGENTS.md warning about breaking changes
- **React 19.2.4**
- **TypeScript** (strict mode, path alias `@/*` → `./src/*`)
- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme inline {}` blocks in CSS; the v3 `tailwind.config.js` and `@tailwind` directives are gone
- **ESLint v9** flat config in `eslint.config.mjs`

## Architecture

This is a fresh Next.js App Router project. All routes live under `src/app/`:

- `layout.tsx` — root layout; loads Geist fonts via `next/font/google`, applies CSS variables, wraps children in a flex column body
- `page.tsx` — home route (`/`)
- `globals.css` — global styles; defines CSS custom properties for background/foreground and registers them via `@theme inline` for Tailwind

Route segments, Server Components, and Client Components follow the App Router conventions. Before adding routes, data-fetching patterns, or middleware, read the relevant guide in `node_modules/next/dist/docs/01-app/` — this version of Next.js has API changes that differ from prior training data.
