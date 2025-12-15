# Personal Profile & Dashboard

A bilingual single-page application that promotes an experienced system-focused frontend engineer.
The landing page highlights the hero story, projects, skills, and contact entry points, while the
dashboard view surfaces stats, timelines, and data-heavy widgets for deeper exploration.

## About the Developer

- **Name:** Fu-Kai (Kyle) Chang — Senior Frontend / System Architect based in Taiwan
- **Focus:** Web performance, front-end architecture, DevOps automation, IoT interfaces, and
  multi-framework migrations (Vue ⇄ Angular ⇄ React)
- **Availability:** Open to global opportunities and collaborations

## Project Architecture

```
src/
├─ pages/
│  ├─ landing/                # Marketing-style profile composed of hero, experience, and contact sections
│  └─ dashboard/              # Data dashboard with stats, timeline, active skills, and cards
├─ shared/components/
│  ├─ hero-section, experience, project, education, contact
│  ├─ dashboard/              # Cards & widgets specific to the dashboard view
│  └─ carrer-timeline/        # Timeline provider, hook, and visual components
├─ core/
│  ├─ constants/              # Data sources (jobs, projects, skills, stats, education, navs)
│  ├─ interfaces & types      # Strongly-typed models for all constants
│  └─ services/i18n.service   # i18next setup with HTTP backend + language detector
├─ shared/layouts/            # MainLayout containing navbar + page content slot
└─ styles/                    # Tailwind theme overrides and SCSS utilities
```

### Design Logic

1. **Data-driven UI:** All content (jobs, projects, education, stats) lives in `core/constants`,
   which keeps components declarative and simplifies localization.
2. **Full i18n coverage:** i18next loads JSON resources from `/public/translations/common/*`. Both
   landing and dashboard read copy via `useTranslation`, supporting seamless English
   ⇄ 繁體中文 switches.
3. **Motion-first experience:** Framer Motion powers hero flourishes, cards, counters, and timeline
   animations, helping the portfolio feel alive without compromising performance.
4. **Responsive layout:** Tailwind utility classes align typography, spacing, and dark-mode colors;
   grid-based sections scale across mobile → desktop transparently.
5. **Reusable shells:** The navbar, layout wrappers, and timeline provider expose hooks/contexts so
   that future sections can plug in without duplicating logic.

## Technology Stack

- **Framework & Tooling:** React 18, TypeScript, Vite, React Router, ESLint, Prettier
- **Styling & UI:** Tailwind CSS, custom SCSS utilities, Lucide React icons
- **Animation & UX:** Framer Motion, responsive grids, motion-enhanced hover states
- **Internationalization:** i18next, `i18next-http-backend`, `i18next-browser-languagedetector`
- **State/Data Layer:** Typed constant files + interfaces for jobs, skills, stats, projects, and
  education

## Getting Started

```bash
pnpm install  # or npm install / yarn
pnpm dev      # starts Vite dev server with HMR
dev server URL: http://localhost:5173
```

### Build & Preview

```bash
pnpm build    # type-check + production bundle
pnpm preview  # serve the build output for verification
```
