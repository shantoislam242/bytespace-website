# ByteSpace

Landing page for **ByteSpace**, an online course platform, built from the "ByteSpace New" Figma design.
Includes the full landing page plus the Login and Register pages.

**Live:** _added after deployment_

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Fonts: Poppins (headings) and Satoshi (body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint`  | Run ESLint               |

## Pages

| Route       | Description                                   |
| ----------- | --------------------------------------------- |
| `/`         | Landing page                                  |
| `/login`    | Sign in page                                  |
| `/register` | Create account page                           |

## Project structure

```
src/
├── app/                  # routes, layout, global styles
│   ├── login/
│   └── register/
├── components/
│   ├── auth/             # auth layout, form, inputs
│   ├── home/             # landing page sections
│   ├── layout/           # navbar, footer
│   ├── ui/               # reusable pieces (Button, CourseCard, ...)
│   └── icons.tsx
├── data/                 # static content (courses, testimonials, ...)
├── fonts/                # self-hosted Satoshi
└── lib/
```

## Notes

- Colors and the type scale come from the style guide page in Figma and live in `src/app/globals.css` as Tailwind theme tokens
  (`bg-primary-800`, `text-neutral-700`, `text-heading-m`, `text-body-l`, ...).
- The design is 1440px wide. Decorative elements are positioned as offsets from the page center so the layout stays
  balanced on wider screens. On smaller screens they are hidden or scaled down.
- The soft background glows are plain CSS radial gradients (`src/lib/blob.ts`) instead of exported images.
- All content is static and lives in `src/data`.
