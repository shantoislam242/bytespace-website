# ByteSpace

Website for **ByteSpace**, an online course platform, built from the "ByteSpace New" Figma design.
Includes every page from the design: landing page, course search, course details (about, lessons, reviews), creator profile, login, register and a custom 404 page.

**Live:** https://bytespace-website-phi.vercel.app

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

| Route                                  | Description                  |
| -------------------------------------- | ---------------------------- |
| `/`                                    | Landing page                 |
| `/courses`                             | Course search                |
| `/courses/build-digital-asset`         | Course details (About tab)   |
| `/courses/build-digital-asset/lessons` | Course details (Lessons tab) |
| `/courses/build-digital-asset/reviews` | Course details (Reviews tab) |
| `/creators/purepearl-studio`           | Creator profile              |
| `/login`                               | Sign in                      |
| `/register`                            | Create account               |
| any unknown URL                        | Custom 404 page              |

## Project structure

```
src/
├── app/                  # routes, layout, global styles
│   ├── courses/          # search + [slug] details with lessons/reviews tabs
│   ├── creators/[slug]/
│   ├── login/
│   └── register/
├── components/
│   ├── auth/             # auth layout, form, inputs
│   ├── course/           # course hero, sidebar, tabs, ratings
│   ├── creator/
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
- On monitors wider than 1600px the whole page is scaled up with CSS `zoom` so it does not look tiny.
- The soft background glows are plain CSS radial gradients (`src/lib/blob.ts`) instead of exported images.
- All content is static and lives in `src/data`.
