# Portfolio Next

Next.js (App Router) portfolio with localized routes (`/en`, `/es`), TypeScript, and a performance-first UI.

## Stack

- Next.js 14 + React 18
- TypeScript (strict)
- Tailwind CSS
- next-intl for i18n routing/content

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
npm run start
```

## Structure

- `src/app/[locale]` locale route layout/page
- `src/content` typed localized portfolio content
- `src/components` modular section components
- `src/i18n` next-intl routing/request config
- `public/images` migrated project/profile images

## Deploy (Vercel)

1. Push this folder as its own Git repository.
2. Import the repo in Vercel.
3. Use default Next.js build settings.
4. Set production domain and update metadata base URL in `src/app/layout.tsx`.
