# Glamora Web

Single-page React + Vite marketing site for Glamora.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The lowest-friction setup is Vercel with Git-based deploys.

1. Push this repo to GitHub.
2. Import the repository into Vercel.
3. Use these settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Connect the production branch.

After that, every local change you commit and push will deploy automatically.

If you prefer Netlify, the same build command and `dist` output directory work there as well.

## Notes

- The app is a minimal brochure site, so no backend is required.
- Static assets live in `public/images`.
