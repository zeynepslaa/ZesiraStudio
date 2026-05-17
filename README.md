# Zesira Studio

Premium Sims 4 creator studio and living universe platform built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Publishing

Use Vercel for the easiest automatic publishing flow.

1. Create a GitHub repository for this project.
2. Push this folder to that repository.
3. Go to Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Keep the default Next.js settings.
6. Deploy.

After this one-time setup, every push to the main branch automatically rebuilds and publishes the live website. Visitors will see the newest version without manually re-uploading files.

## Editing Content

Most homepage content is centralized in:

```txt
data/studio.ts
```

Update characters, districts, timeline events, downloads, and diary posts there. Commit and push the change; Vercel will publish it automatically.

## Useful Commands

```bash
npm run dev
npm run build
```
