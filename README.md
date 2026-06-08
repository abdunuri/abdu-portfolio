# Abdulaziz Nuri — Portfolio

Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Syne (display), DM Sans (body), JetBrains Mono (code)
- **Deployment**: GitHub Pages

## Design System

- **Theme**: Dark-first with glassmorphism
- **Accent**: Electric cyan `#00d4ff` + Violet `#7c3aed`
- **Layout**: Bento grid for projects, responsive throughout
- **Motion**: Subtle scroll-triggered fade-up animations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Deployment

Deploy to GitHub Pages:

```bash
# Build the static export
npm run build
```

Pushes to `main` run `.github/workflows/pages.yml`, which builds the static export and publishes `out/` to the `gh-pages` branch.

## Customization

All content lives in `src/data/index.ts` — update your projects, skills, experience, and links there. No need to touch component files for content changes.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Main page
│   └── globals.css       # Design system variables & utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── WhatIBuild.tsx
│       ├── Projects.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── data/
│   └── index.ts          # ← All your content lives here
└── lib/
    └── utils.ts
```

## Sections

1. **Hero** — Name, typewriter role, tagline, CTAs, availability badge
2. **What I Build** — 6 service cards in a bento grid
3. **Projects** — Bento grid with Gagari as flagship, all 6 projects
4. **About** — Bio, stats, location card
5. **Tech Stack** — Grouped by category with hover states
6. **Experience** — Timeline + certifications + Upwork badge
7. **Contact** — Email CTA + all social/platform links

## Domain

Production domain:
- `abdunuri.me`
