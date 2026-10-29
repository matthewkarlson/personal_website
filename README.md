# Matthew Karlson's Personal Website

My personal website and little corner of the internet: [www.mattkarlson.com](https://www.mattkarlson.com)

It has a short intro, my work experience, past projects (now retired, with code on GitHub), a bit about me, and a blog.

## Stack

- [SvelteKit](https://kit.svelte.dev/) with [Tailwind CSS](https://tailwindcss.com/)
- Blog posts written in Markdown (`src/lib/posts`)
- Deployed on [Vercel](https://vercel.com/) via `@sveltejs/adapter-vercel`
- PostHog analytics, proxied through a first-party domain

## Running locally

```sh
npm install
npm run dev
```

Other scripts:

```sh
npm run build    # production build
npm run preview  # preview the production build
```

## Structure

- `src/routes` - pages (home, blog)
- `src/components` - header, footer, and the main page sections
- `src/lib/posts` - blog posts in Markdown
- `static` - images and static assets
