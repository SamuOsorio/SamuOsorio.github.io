# Samuel Osorio Rodríguez — Portfolio

Personal portfolio site built with React, Vite, TypeScript, and Tailwind CSS. Bilingual (ES/EN), light/dark theme, and project cards that pull live stats (stars, language, last update) straight from the GitHub API.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```

## Structure

- `src/data/` — structural content (profile info, skills, projects, education) shared across languages.
- `src/i18n/` — `en.json` / `es.json` translation strings, consumed via `useLanguage()`.
- `src/context/` — theme (light/dark) and language state, persisted to `localStorage`.
- `src/hooks/useGithubRepo.ts` + `src/lib/githubApi.ts` — fetches live repo data per project card, with a `sessionStorage` cache and graceful fallback to static content if the GitHub API is unavailable or rate-limited.
- `public/cv/` — downloadable CV PDFs (English and Spanish).

## Updating content

- New/updated projects: edit `src/data/projects.ts` (structural facts) and add matching `title`/`description` keys under `projects.<id>` in both `src/i18n/en.json` and `src/i18n/es.json`.
- Skills: edit `src/data/skills.ts`.
- Education/achievements: edit `src/data/education.ts` and the `education.*` keys in the i18n files.
- Profile photo: replace `public/images/profile-placeholder.svg` and update `photoPath` in `src/data/profile.ts`.

## Deploying

The build output in `dist/` is fully static and can be deployed to GitHub Pages, Vercel, Netlify, or any static host — no server-side code required.
