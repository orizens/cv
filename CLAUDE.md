# CLAUDE.md

## Project Overview

This is an **Oren Farhi's online CV** — a data-driven static site built with **Astro 5.17** and manual **CSS**, deployed to Netlify. The entire CV content is sourced from JSON data files, making it easy to update credentials, experience, skills, and other information without touching component code.

## Common Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build static site to ./dist
npm run preview  # Preview built site locally
npm run check    # TypeScript checking via astro check
npm start        # Serve dist/ folder via http-server
```

## Architecture & Data Flow

### High-Level Structure

```
src/
├── pages/           # Entry point: index.astro imports all data & renders sections
├── components/
│   ├── layout/      # CVLayout (HTML structure, metadata, schema)
│   ├── sections/    # Hero, Profile, Experience, Skills, Achievements, Publications, Education, Social, Contact
│   └── ui/          # Reusable UI components (ExperienceItem, SkillTag, SectionTitle, Icon, etc.)
├── data/            # JSON files: profile, experience, skills, education, achievements, publications, contact, social
├── types/           # TypeScript interfaces for all data shapes (cv.ts)
└── styles/          # print.css (CV-optimized printing), screen.css (responsive styles)
```

### Data-Driven Pattern

1. **Data Source**: JSON files in `src/data/` (profile.json, experience.json, skills.json, etc.)
2. **Type Definitions**: `src/types/cv.ts` defines all interfaces (UserProfile, ExperienceItem, Skills, Achievement, etc.)
3. **Single Entrypoint**: `src/pages/index.astro` imports all data + components and composes the page
4. **Component Props**: Section components (Experience.astro, Skills.astro, etc.) receive typed data as props
5. **No Runtime Data Fetching**: All data is bundled at build time; site is purely static

### Key Data Shapes

- **UserProfile**: name, title, avatarUrl, summary, cofounding details
- **ExperienceItem**: role, date, company, tagline, clients[], projects[]
- **Skills**: languages[], libraries[], frameworks[], testing[], other[], ai[]
- **Achievement**: title, description, href, badge, details[]
- **EducationItem**: institution, degree, years
- **Publication**: title, href, image, imageAlt
- **ContactLink / SocialLink**: href, icon (icon name), text, isLa (optional)

## Important Implementation Details

### TypeScript Path Aliases

`tsconfig.json` defines shortcuts:

```
@data/*       → src/data/*
@components/* → src/components/*
@types/*      → src/types/*
```

Use these in imports for clarity, though relative paths work too.

### Schema.org JSON-LD

`src/pages/index.astro` builds a complete Schema.org Person/Role/Book/Award structure and injects it into the page head. This powers Google rich snippets and SEO. When updating data (especially experience or achievements), check that jsonLd construction logic still maps correctly.

### Deployment Configuration

- **Site Base**: `https://orizens.github.io/cv` (astro.config.mjs)
- **Output**: Static HTML (no server-side rendering)
- **Netlify Config**: netlify.toml present for Netlify CI/CD if needed

## Modifying Content

To update CV content, edit the JSON files in `src/data/` — no component changes needed:

- **Profile info** → `src/data/profile.json`
- **Work history** → `src/data/experience.json`
- **Skills** → `src/data/skills.json` (organized by category)
- **Education** → `src/data/education.json`
- **Achievements** → `src/data/achievements.json` (includes book authorship, npm modules)
- **Publications** → `src/data/publications.json` (image + link)
- **Contact links** → `src/data/contact.json`
- **Social links** → `src/data/social.json`

Ensure JSON is valid and matches the TypeScript interfaces in `src/types/cv.ts` to avoid build errors.

## Component Notes

- **Sections** (Hero, Profile, Experience, etc.) are pure and stateless — no client-side interactivity
- **Icon component** uses string icon names (e.g., "laptop", "briefcase") — check existing data files for valid names
- **ExperienceItem** supports optional `highlight` flag to visually emphasize a role
- **Publication images** are stored in `public/images/` and referenced in publications.json

## Styling

- **Tailwind CSS** for responsive design
- **print.css** contains print-specific styles (CV is designed to print well)
- **screen.css** contains screen-specific styles
- Colors and spacing follow Tailwind conventions; customization via tailwind.config.js if needed

## Git Branches

- **main/master**: Production-ready code
- **feat/astro**: Current feature branch for Astro updates
- **gh-pages**: Deployed site source (referenced in README)
