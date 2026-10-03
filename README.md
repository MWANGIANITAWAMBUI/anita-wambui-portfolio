# Anita Wambui Mwangi — Portfolio

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
- **Screenshots:** put an image in `public/projects/`, then set `image: '/projects/name.webp'` and `imageAlt` on the project. Only use images you are allowed to show publicly. Without an image, a lightweight CSS illustration is used.
- **Colors:** edit the tokens at the top of `index.css` (`:root` for dark, `:root[data-theme="light"]` for light).
