# Anita Wambui Mwangi: Portfolio

React + TypeScript + Vite + Tailwind CSS (v4). Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build into dist/
npm run typecheck
```

## Editing content

Everything on the Work and Case Studies sections comes from one list in `constants.ts` (`PROJECTS`). To add a project, add one object there. The cards, filters, case study tabs and "Recently shipped" panel update automatically.

- **Private code?** Leave `repoUrl` out. The card shows the `sourceNote` instead of a GitHub button.
- **Play Store link for Songa:** uncomment `liveUrl` and `liveLabel` on the Songa entry.
- **Card image:** put an image in `public/projects/`, then set `image: '/projects/name.webp'` and `imageAlt` on the project. Without one, a lightweight CSS illustration is used.
- **Case study screenshots:** every project has numbered placeholder images in `public/projects/<project-id>/`. Take your screenshot, rename it to the placeholder's exact name (for example `01-landing.png`), and replace the file. It appears in that project's case study automatically. The file names are listed in `SCREENSHOT_FILES` in `constants.ts`; delete a line there to hide a screenshot. Use demo data only, never real clients, users, tokens or internal URLs, and keep images under about 400 KB so the site stays fast.
