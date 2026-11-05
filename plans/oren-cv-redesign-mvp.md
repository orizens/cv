# Oren Farhi CV Website Redesign - MVP Specification

## 1. Purpose

Redesign `https://orencv.netlify.app/` as a modern, premium online CV for Oren Farhi, positioned as a **Principal / Staff Frontend Engineer, UI Architect, and Product Builder**.

The MVP must:

- Preserve all existing CV content and employment history.
- Use the approved Orizens-inspired visual direction without overwhelming the professional content.
- Make Oren's seniority, technical impact, leadership, and open-source credibility understandable within the first screen.
- Remain accessible, responsive, fast, SEO-friendly, ATS-friendly, AI-readable, and printable as a clean PDF.
- Maintain one canonical content source for the web page, metadata, structured data, and printable CV.

image assests you can use following: https://orizens.com

/Users/farhioren/Projects/orizens.com/public/images/

## 2. Product Outcomes

The redesigned page should help a recruiter or hiring manager answer these questions quickly:

1. What level is Oren?
2. What engineering problems does he solve?
3. What measurable impact has he produced?
4. Which technologies and engineering practices does he understand deeply?
5. Has he led and mentored engineers while remaining hands-on?
6. Where can the visitor verify his work, writing, book, and open-source contributions?
7. How can the visitor download, print, or share his CV?

## 3. MVP Scope

### In scope

- One responsive, single-page CV website.
- Hero and primary positioning.
- Profile summary.
- Credibility metrics.
- Complete experience timeline.
- Personal projects and selected work.
- Skills grouped by capability.
- Achievements, publication, web profiles, and education.
- Contact call to action.
- Download and print-to-PDF functionality.
- Semantic HTML, SEO metadata, JSON-LD, social preview metadata, and machine-readable CV data.
- Light motion with reduced-motion support.
- Automated checks for accessibility, print layout, structured data, and critical content.

### Out of scope for the MVP

- CMS or authenticated admin portal.
- Blog migration.
- Contact form backend.
- Visitor accounts.
- AI chatbot trained on the CV.
- Multiple visual themes.
- Complex 3D, WebGL, or canvas animation.
- Analytics dashboards.

## 4. Target Users and Core User Stories

### Recruiter

- As a recruiter, I can identify Oren's target role and years of experience immediately.
- As a recruiter, I can scan recent roles and major impact without reading every paragraph.
- As a recruiter, I can download or print a professional PDF.
- As a recruiter, I can find contact, LinkedIn, GitHub, npm, and portfolio links quickly.

### Engineering leader

- As an engineering leader, I can assess architecture, modernization, testing, mentorship, and hands-on implementation experience.
- As an engineering leader, I can review the complete employment timeline and technology context.
- As an engineering leader, I can verify open-source and publication credentials.

### Search engine, ATS, or AI assistant

- As a machine consumer, I can extract Oren's identity, title, skills, roles, employers, dates, education, work samples, and contact links from semantic markup and structured data.
- As a machine consumer, I receive the same factual content visible to human visitors.

### Oren

- As Oren, I can update one structured content file and have the website, metadata, and printable CV reflect the update.

## 5. Information Architecture

Use the following page order:

1. Sticky navigation
2. Hero and positioning
3. Credibility metrics
4. Profile summary
5. Selected engineering impact
6. Complete experience timeline
7. Selected projects and open source
8. Skills and capabilities
9. Achievements and publication
10. Education and web profiles
11. Contact call to action
12. Footer

On desktop, the detailed CV area may use a main timeline and a sticky sidebar. On mobile and in print, all sections must become a single logical document flow.

## 6. Content Requirements

### 6.1 Hero

Required content:

- `OREN FARHI`
- `Principal / Staff Frontend Engineer`
- `UI Architect & Product Builder`
- A concise value proposition focused on frontend systems, architecture, quality, and developer experience.
- Professional portrait.
- Primary buttons: `View Experience` and `Download Résumé`.
- Secondary links: LinkedIn and GitHub.

Desktop visual treatment:

- Midnight-blue Orizens-inspired background.
- Restrained cosmic texture or grid.
- Professional portrait on the right.
- Subtle orbit graphic with four capability nodes:
  - Architecture
  - React + TypeScript
  - Engineering Quality
  - Technical Leadership

The orbit must be decorative. It must not be the only place where these capabilities appear in text.

### 6.2 Credibility metrics

Show a compact four-column strip:

- `20+ Years` - product development experience
- `230+ E2E Scenarios` - designed and implemented
- `5+ Engineers Mentored` - confirm the final number before launch
- `Published Technical Author`

Store metrics as data, not hard-coded visual text.

### 6.3 Profile

Preserve the existing professional summary, but display it as:

- One concise lead paragraph.
- One optional supporting paragraph.
- A separate ReadM co-founder callout.

The print version may use the complete canonical summary without interactive truncation.

### 6.4 Selected engineering impact

Add three summary cards before the complete timeline:

1. **Frontend Modernization** - migration and architecture work at Rivery.
2. **Quality at Scale** - E2E infrastructure, Playwright, Cypress, TDD, and BDD.
3. **Open-Source Influence** - packages used across the JavaScript ecosystem.

Each card should contain a title, concise factual summary, one measurable signal where available, and a link or anchor to supporting experience.

Do not invent metrics. If a result is not verified, describe the action and scope without a fabricated percentage.

### 6.5 Experience timeline

Preserve every role and its canonical dates:

1. Senior & Lead UI Engineer - Zscaler - 2026 to Present, if the role remains current.
2. Lead UI Engineer - HighRes BioSolutions - 2024 to 2026.
3. CTO & Lead Software Engineer - Akto Space - 2023 to 2024.
4. Senior Front End Tech Lead / Engineer - Rivery - 2022 to 2023.
5. Head of Front End Engineering / Tech Lead - 1Care.ai - 2020 to 2022.
6. Senior Front End Engineer & Consultant - Tangent Logic - 2018 to 2020.
7. Senior Front End Engineer & Consultant - Orizens - 2016 to 2018.
8. Senior Front End Engineer, Front End Architect - Tikal Knowledge - 2010 to 2016.
9. UI Front End Developer - Comverse - 2008 to 2010.
10. Web Developer & Web Designer Freelance - Orizens.com - 2005 to 2010.

Each role must support:

- Role title.
- Company.
- Start and end dates.
- Location or remote status, if available.
- One summary statement.
- Impact or highlight bullets.
- Technology tags.
- Optional external company or project link.

Recent roles should be expanded by default. Older roles can be visually compact on screen, but their full text must remain present in the DOM and must always be expanded in print.

### 6.6 Projects and open source

At minimum, include:

- ReadM.
- Ittim, if Oren wants it presented professionally in the CV.
- Echoes Player.
- ngx-infinite-scroll.
- Orizens npm packages.
- `Reactive Programming with Angular and NgRx`.

Each project card should support role, description, technical challenge, technologies, result or adoption signal, and relevant links.

### 6.7 Skills

Replace one undifferentiated tag cloud with capability groups:

- Architecture.
- Engineering quality.
- Core technologies.
- Frameworks and platforms.
- Leadership and developer experience.
- AI-assisted engineering.

Preserve the current skills, including TypeScript, JavaScript, CSS, React, TanStack Query, Tailwind, shadcn/ui, React Native, Redux Toolkit, Chakra UI, Panda CSS, Sass, NgRx, Storybook, Firebase, Astro, Angular, Electron, Node.js, Playwright, Vitest, Jest, Cypress, Testing Library, GitHub, GitHub Actions, UX, architecture, and Git.

Use `AI-Assisted Engineering`, not `AI Code Assitants`.

### 6.8 Achievements, publication, education, and profiles

Include:

- Author of `Reactive Programming with Angular and NgRx`.
- ngx-infinite-scroll achievement and verified adoption or download information.
- Book cover and publication link.
- Orizens, GitHub, npm, LinkedIn, and any active professional social profile.
- The Open University, B.A. Computer Science & Management, 2001 to 2007.

Remove stale social profiles if they do not strengthen Oren's candidacy.

### 6.9 Contact

- Use one primary phone number unless there is a clear reason to show two.
- Use the professional email address.
- Include LinkedIn, GitHub, Orizens, and downloadable résumé links.
- Obfuscate email only if it does not impair accessibility, printing, or machine readability.

## 7. Component Architecture

use existing components and if needed,
use these:
Suggested component tree:

```text
CvPage
├── CvHeader
├── HeroSection
│   ├── HeroCopy
│   ├── HeroActions
│   ├── ProfessionalPortrait
│   └── CapabilityOrbit
├── CredibilityMetrics
├── CvMain
│   ├── ProfileSection
│   ├── ImpactHighlights
│   ├── ExperienceTimeline
│   │   └── ExperienceCard[]
│   ├── ProjectsSection
│   │   └── ProjectCard[]
│   └── CvSidebar
│       ├── ContactCard
│       ├── SkillsCard
│       ├── AchievementsCard
│       ├── PublicationCard
│       ├── ProfilesCard
│       └── EducationCard
├── ContactCta
└── CvFooter
```

Requirements:

- Components consume typed data rather than embedding résumé facts in JSX.
- Decorative components must be isolated from semantic content.
- Interactive experience cards use native buttons and valid ARIA state.
- Links use descriptive accessible names.
- No essential text is rendered only into canvas, SVG paths, or background images.

## 8. Canonical Data Model

Create a single typed source such as `src/content/cv.ts` or `src/content/cv.json`.

Recommended shape:

```ts
export interface CvData {
  person: {
    name: string;
    headline: string;
    alternateHeadline?: string;
    summary: string[];
    email: string;
    phone?: string;
    location?: string;
    portrait: string;
    profiles: Array<{ label: string; url: string }>;
  };
  metrics: Array<{
    label: string;
    value: string;
    description: string;
    verified: boolean;
  }>;
  impactHighlights: Array<{
    title: string;
    summary: string;
    evidenceRoleId: string;
  }>;
  experience: Array<{
    id: string;
    role: string;
    company: string;
    startDate: string;
    endDate?: string;
    current?: boolean;
    location?: string;
    summary: string;
    highlights: string[];
    technologies: string[];
    url?: string;
  }>;
  projects: Array<{
    id: string;
    name: string;
    role?: string;
    summary: string;
    challenge?: string;
    outcome?: string;
    technologies: string[];
    links: Array<{ label: string; url: string }>;
  }>;
  skillGroups: Array<{
    name: string;
    skills: string[];
  }>;
  publications: Array<{
    title: string;
    publisher?: string;
    year?: number;
    url: string;
    cover?: string;
  }>;
  education: Array<{
    institution: string;
    qualification: string;
    startDate: string;
    endDate: string;
  }>;
}
```

Validation requirements:

- Validate content at build time with Zod or the project's existing schema library.
- Fail the build when required dates, role titles, URLs, or core identity fields are missing.
- Prevent an end date when `current: true` unless explicitly supported.
- Normalize skill spelling and company names in one place.

## 9. Design System

use lucide icons
tailwind is not a requriement for now.

### 9.1 Tailwind theme tokens

Use semantic tokens rather than repeating raw values:

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        canvas: "#F5F7FA",
        surface: "#FFFFFF",
        ink: "#111827",
        muted: "#667085",
        line: "#DCE3EC",
        night: "#07111F",
        "night-raised": "#0D1B2E",
        "night-muted": "#9EACC0",
        accent: "#18A9FF",
        violet: "#8B7CFF",
        success: "#15803D",
      },
      fontFamily: {
        display: ["Manrope", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "1rem",
        hero: "1.5rem",
      },
      boxShadow: {
        card: "0 12px 40px rgba(15, 23, 42, 0.08)",
        glow: "0 0 48px rgba(24, 169, 255, 0.18)",
      },
      maxWidth: {
        cv: "80rem",
      },
    },
  },
};
```

If the project uses Tailwind v4, express these as CSS theme variables rather than a JavaScript configuration object.

### 9.2 Typography

- Hero name: `text-5xl md:text-7xl font-extrabold tracking-tight`.
- Section heading: `text-2xl md:text-3xl font-bold tracking-tight`.
- Role title: `text-lg md:text-xl font-bold`.
- Body: `text-base leading-7`.
- Dates and labels: mono font, uppercase only for short labels.
- Minimum body size: 16px on screen and 10pt in print.

Use local or self-hosted font files when possible to improve privacy, rendering stability, and PDF output. Provide system fallbacks.

### 9.3 Layout

- Page maximum width: `max-w-cv`.
- Main gutters: `px-5 sm:px-8 lg:px-12`.
- Section spacing: `py-16 md:py-24`.
- Desktop content grid: approximately `lg:grid-cols-[minmax(0,2fr)_minmax(18rem,0.8fr)]`.
- Experience cards: white surfaces with fine borders and restrained shadows.
- Mobile: one column, no sticky sidebar, no horizontal scrolling.

### 9.4 Surfaces and effects

- Use gradients only as restrained hero accents.
- The cosmic texture must remain subtle enough to preserve text contrast.
- Glass effects are limited to hero actions, metrics, and small decorative surfaces.
- Use `backdrop-blur` only where it does not reduce performance or print quality.
- All cards require visible boundaries without relying solely on shadows.

### 9.5 Motion

- Allow one-time fade and translate transitions as content enters the viewport.
- Use a slow, subtle orbit animation only in the hero.
- Disable decorative animation for print.
- Respect `prefers-reduced-motion` with Tailwind `motion-reduce:` variants.
- Do not delay access to content while animations run.

## 10. Responsive Behavior

### Mobile

- Collapse navigation into a compact accessible menu.
- Stack hero copy above the portrait.
- Simplify or remove orbit lines while retaining text labels in the skills section.
- Display metrics in a two-column grid.
- Convert the main timeline and sidebar into a single linear flow.
- Keep contact and download actions visible without a fixed overlay.

### Tablet

- Use a stacked hero or balanced two-column layout depending on available width.
- Metrics may remain two columns.
- Timeline remains single-column.

### Desktop

- Use the complete split hero.
- Use main timeline plus sticky sidebar.
- Limit sticky behavior to the viewport and avoid overlapping the footer.

## 11. Printable PDF Requirements

Printing is a first-class MVP feature, not an afterthought.

### 11.1 User experience

- `Download Résumé` should point to a stable PDF file when a generated PDF is available.
- Also provide a `Print / Save as PDF` action that calls `window.print()`.
- Label the downloaded file clearly, for example `Oren-Farhi-Principal-Frontend-Engineer-CV.pdf`.
- Display the file's last-updated date near the download control or in document metadata.

### 11.2 Print layout

Create a dedicated print stylesheet using Tailwind print variants and a small global CSS layer:

```css
@page {
  size: A4;
  margin: 12mm 14mm;
}

@media print {
  html {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  body {
    background: white !important;
    color: #111827 !important;
    font-size: 10pt;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .experience-card,
  .project-card,
  .education-card {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
```

Use utilities such as:

- `print:hidden` for navigation, orbit graphics, decorative backgrounds, hover controls, and contact CTA buttons.
- `hidden print:block` for a compact print header, full URLs where useful, and print-only metadata.
- `print:shadow-none print:border-0 print:bg-white` for cards.
- `print:static` to disable sticky positioning.
- `print:grid-cols-1` or an explicit print layout to prevent narrow sidebars.

### 11.3 Print content rules

- Do not print the large cosmic hero artwork.
- Replace it with a compact identity header containing name, target title, contact, and primary profile URLs.
- Expand every collapsed experience item.
- Include all employment entries, education, key skills, publication, and important links.
- Avoid orphaned role headings at the bottom of a page.
- Do not split a short experience card across pages.
- Permit a long role to break only between bullets when unavoidable.
- Ensure link destinations remain present in the PDF. Use visible short URLs where appropriate.
- Use real text throughout. Do not rasterize the résumé into an image.
- Verify both A4 and US Letter. Choose one canonical downloadable PDF, but ensure browser printing works acceptably for both.

### 11.4 PDF generation

Preferred options:

1. Generate the canonical PDF during build or deployment with Playwright or Puppeteer using the print stylesheet.
2. Store the generated PDF in the public assets directory.
3. Regenerate the PDF whenever canonical CV data changes.

Example build task:

```ts
await page.goto(`${baseUrl}/cv?print=1`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: "public/Oren-Farhi-Principal-Frontend-Engineer-CV.pdf",
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
```

Do not generate the PDF from the animated screen composition. Use the print route or print mode.

### 11.5 PDF acceptance checks

- No clipped text or content outside page bounds.
- No blank pages.
- No overlapping cards or sticky elements.
- All roles are present.
- Search and text selection work inside the PDF.
- Links are clickable.
- Portrait is optional and small.
- File size target: under 2 MB where practical.
- Page count target: approximately 3 to 5 pages, depending on preserved detail.

## 12. AI-Friendly and ATS-Friendly Features

AI-friendly means explicit, structured, accessible, and factually consistent. It does not mean hiding keywords or adding invisible text.

### 12.1 Semantic HTML

- Use one `<h1>` for Oren's name.
- Use ordered heading levels for Profile, Experience, Projects, Skills, Publication, and Education.
- Use `<article>` for each experience entry.
- Use `<time datetime="YYYY-MM">` for employment dates.
- Use lists for highlights and skills.
- Use `<address>` for contact information where appropriate.
- Use meaningful link text, not repeated `Click here` labels.
- Keep full résumé facts in server-rendered HTML.

### 12.2 JSON-LD

Add a `Person` JSON-LD object generated from canonical CV data:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Oren Farhi",
  "jobTitle": "Principal / Staff Frontend Engineer and UI Architect",
  "url": "https://orizens.com/cv",
  "sameAs": [
    "https://github.com/orizens",
    "https://www.linkedin.com/in/orenfarhi/",
    "https://www.npmjs.com/~orizens"
  ],
  "knowsAbout": [
    "Frontend Architecture",
    "React",
    "TypeScript",
    "Angular",
    "End-to-End Testing",
    "Playwright",
    "Technical Leadership"
  ]
}
```

Also consider `ProfilePage`, `Book`, `CreativeWork`, and `Organization` entities where accurate. Do not misrepresent employers, affiliations, awards, or current status.

### 12.3 Machine-readable CV endpoint

Expose a stable public endpoint such as:

- `/cv.json`
- `/resume.json`

It should contain the same public professional content used by the page and omit private or unnecessary personal information.

Recommended additions:

- `lastUpdated`.
- `schemaVersion`.
- Stable IDs for roles and projects.
- ISO-formatted dates.
- Absolute URLs.
- A short factual summary and a complete summary.

Optionally expose `/cv.txt` or `/resume.md` as a clean text representation for accessible and machine-assisted use. Link it from the HTML `<head>` or footer rather than relying on discovery by guessing URLs.

### 12.4 Metadata

Required metadata:

- Unique title and meta description.
- Canonical URL.
- Open Graph title, description, image, type, and URL.
- Twitter card metadata if the profile remains active.
- `robots` set to allow indexing.
- Sitemap entry.
- Descriptive portrait and book-cover alt text.

Suggested title:

`Oren Farhi | Principal Frontend Engineer & UI Architect`

### 12.5 AI and ATS content rules

- Keep role titles, employer names, dates, technologies, and achievements as selectable text.
- Avoid placing important keywords exclusively inside badges or decorative graphics.
- Expand acronyms at least once when useful, such as End-to-End (E2E).
- Do not use hidden text, white-on-white text, keyword stuffing, or content that differs between crawlers and people.
- Keep the printable PDF in a simple reading order.
- Add a visible last-updated date.
- Maintain factual parity between HTML, JSON-LD, JSON, text, and PDF outputs.
- Use `aria-hidden="true"` only for genuinely decorative artwork.
- Provide a clear content hierarchy that survives CSS removal.

## 13. Accessibility Requirements

Target WCAG 2.2 AA for the MVP.

- Text contrast of at least 4.5:1 for normal text.
- Visible keyboard focus states.
- Full keyboard access to navigation, accordions, and actions.
- Skip link to main content.
- Touch targets of at least 44 by 44 CSS pixels where practical.
- Portrait alt text should identify Oren without describing irrelevant visual detail.
- Decorative orbit lines and stars must be hidden from assistive technology.
- Accordions must use buttons with `aria-expanded` and `aria-controls`.
- Reduced-motion support.
- No information communicated by color alone.
- Test zoom at 200 percent and reflow at 320 CSS pixels.

## 14. Performance and Technical Requirements

- Prefer static generation or server rendering.
- Render all core CV content without requiring client-side JavaScript.
- Use responsive image formats and dimensions to prevent layout shift.
- Preload only essential font resources.
- Avoid a heavy animation library for the MVP unless it is already installed.
- Target Lighthouse scores of at least 90 for performance, accessibility, best practices, and SEO on the production build.
- Target Core Web Vitals in the good range.
- Keep the hero decorative assets outside the critical path where possible.
- Do not fetch core CV content from a runtime third-party service.

## 15. SEO Requirements

- Use a canonical URL, preferably `https://orizens.com/cv` if that remains the public destination.
- Redirect obsolete CV URLs to the canonical route.
- Use descriptive section IDs for deep links.
- Include the CV route in the sitemap.
- Add structured breadcrumbs only if the route is part of a broader Orizens site.
- Ensure the page has a meaningful response without JavaScript.
- Prevent duplicate indexing of print-only routes with canonical metadata or `noindex` where appropriate.

## 16. Potential Structural Hurdles

### 16.1 Existing framework and Tailwind version

The current implementation may use a different styling system or an older build setup.

Mitigation:

- Audit the package manifest before implementation.
- Confirm whether Tailwind v3 or v4 is required.
- Avoid mixing multiple utility or component systems without a migration plan.
- Implement the redesign in isolated components before deleting existing styles.

### 16.2 Content duplication

Maintaining separate HTML, PDF, and JSON content will create inconsistencies.

Mitigation:

- Make the typed CV data module canonical.
- Generate HTML, JSON-LD, machine-readable JSON, text output, and PDF from the same data.
- Add tests that compare role counts and IDs across outputs.

### 16.3 Long content versus visual clarity

The complete history is valuable but can overwhelm the screen design.

Mitigation:

- Prioritize recent roles visually.
- Use concise summaries and structured highlights.
- Compact older roles without removing their content.
- Expand everything for print and machine-readable outputs.

### 16.4 Sticky sidebar and printing

Sticky positioning can overlap content or produce broken PDF pages.

Mitigation:

- Disable sticky positioning under `@media print`.
- Use a dedicated print flow rather than printing the screen composition unchanged.

### 16.5 Decorative hero and performance

Large images, blur, and animation can harm loading and readability.

Mitigation:

- Use optimized AVIF or WebP assets with PNG fallback only when needed.
- Keep the orbit code-native with CSS or lightweight SVG.
- Do not animate the portrait or large background.
- Disable the decorative layer on small screens when necessary.

### 16.6 Exact PDF pagination

Browser PDF pagination varies by engine and font availability.

Mitigation:

- Generate the canonical PDF with a pinned Playwright browser version.
- Self-host fonts.
- Add print regression snapshots.
- Use `break-inside`, `break-before`, and print-specific content density deliberately.

### 16.7 Claims and metrics

Some metrics may change or may not be fully verified.

Mitigation:

- Add `verified` and optional `sourceUrl` fields to metrics.
- Do not show an unverified download count as a current statistic.
- Review `5+ Engineers Mentored`, npm usage, and current employment dates before launch.

### 16.8 Privacy and spam

Publishing phone and email makes the information easy to extract.

Mitigation:

- Confirm which phone number should remain public.
- Consider a dedicated professional email address.
- Preserve accessible contact options and avoid obfuscation that breaks copying or PDF output.

## 17. Implementation Phases

### Phase 1 - Foundation

- Audit framework, routing, existing styles, dependencies, and deployment.
- Extract all current content into the typed canonical data model.
- Correct spelling and naming inconsistencies without changing factual meaning.
- Add build-time content validation.
- Establish Tailwind semantic tokens and global typography.

### Phase 2 - Core UI

- Build header, hero, metrics, profile, impact cards, timeline, sidebar, CTA, and footer.
- Add responsive behavior.
- Add accessible experience expansion if needed.
- Add optimized portrait, book cover, and restrained decorative assets.

### Phase 3 - Print and machine-readable outputs

- Build print header and print stylesheet.
- Add print/save action.
- Add build-generated canonical PDF.
- Generate `/cv.json` and optional `/cv.txt` or `/resume.md`.
- Add Person JSON-LD and page metadata.

### Phase 4 - Quality

- Add accessibility checks.
- Add visual regression tests for desktop, mobile, and print.
- Add content-integrity tests.
- Run performance and structured-data validation.
- Verify all links and PDF output.

## 18. Testing Strategy

### Unit and content tests

- CV schema accepts valid content and rejects incomplete roles.
- Every role has a unique stable ID.
- Every current role has a valid start date.
- All external URLs are absolute and use HTTPS where supported.
- Skill names use canonical spelling.

### Component tests

- Experience cards expose correct accessible names and expansion state.
- Download button points to the correct PDF.
- Print button invokes the print action.
- Decorative hero elements are hidden from assistive technology.

### End-to-end tests

- Page loads and shows Oren's name and headline.
- Every canonical role appears in the DOM.
- Navigation deep links reach the correct sections.
- Mobile menu is keyboard operable.
- External professional links are valid.
- `/cv.json` returns valid structured data.
- JSON-LD contains the canonical name, job title, URL, and profiles.

### Print tests

- Generate the PDF in CI.
- Verify PDF page count is within the expected range.
- Extract PDF text and confirm all employer names are present.
- Confirm no critical text is clipped.
- Use screenshot comparison for each PDF page or key print viewport.

### Accessibility tests

- Automated axe or equivalent checks.
- Keyboard-only navigation.
- Screen-reader spot check.
- Contrast review.
- Reduced-motion test.
- 200 percent zoom and mobile reflow test.

## 19. MVP Acceptance Criteria

The MVP is complete when:

- All existing employment roles, achievements, education, skills, and essential links are present.
- The first viewport clearly states Oren's target level and professional value.
- The page is responsive from 320px through large desktop widths.
- Core content is available without client-side JavaScript.
- The downloadable PDF is generated from the same canonical data.
- Browser print output is clean and readable.
- The PDF contains selectable text and clickable links.
- `/cv.json` and JSON-LD are valid and factually consistent with the visible page.
- The page passes the defined accessibility and content-integrity tests.
- The site has no critical Lighthouse accessibility or SEO failures.
- No invented metrics or claims are introduced.
- The production URL, canonical URL, Open Graph metadata, and résumé download all work.

## 20. Recommended AI Coding Assistant Prompt

Use the following as the implementation instruction:

```text
Implement the CV redesign described in this specification as an MVP.

Before changing code, inspect the existing framework, routing, Tailwind version, content model, and deployment configuration. Preserve all current CV facts and links. Create one typed canonical CV data source and render the web page, JSON-LD, machine-readable CV endpoint, and print/PDF version from it.

Build the sections and components defined in the specification. Match the midnight-blue Orizens-inspired hero and the clean off-white editorial résumé layout. Prioritize readability, responsive behavior, semantic HTML, WCAG 2.2 AA accessibility, SEO, ATS compatibility, and AI-readable structured content.

Treat print as a separate presentation mode. Add print styles, expand all experience content for print, remove decorative elements, disable sticky positioning, and generate a selectable-text PDF during the build with Playwright or the project's existing browser automation tool.

Do not remove any current role. Do not invent performance metrics. Do not hide keywords or create crawler-only content. Correct obvious spelling and naming inconsistencies while preserving factual meaning.

Add automated tests for critical content, responsiveness, accessibility, JSON-LD, cv.json, and PDF generation. Run the repository's existing lint, typecheck, test, build, and relevant end-to-end commands. Report changed files, verification results, and any factual content that requires Oren's confirmation.
```

## 21. Pre-Launch Content Confirmation

Confirm these items with Oren before production launch:

- Whether the Zscaler role is current and should read `2026 - Present`.
- Correct official title for each position.
- Which phone number should remain public.
- Whether location should be displayed.
- Whether Ittim should appear as a featured project.
- Current npm download or adoption statistics and their sources.
- Exact number of engineers mentored.
- Whether X/Twitter and YouTube profiles remain professionally relevant.
- Preferred downloadable PDF filename and canonical URL.
- Whether the portrait used in the mockup is approved for production.
