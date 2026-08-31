# AGENTS.md — fantasyfutbol.co

Next.js 16 (App Router) marketing + knowledge-hub site for Fantasy Fútbol, a
mobile fantasy soccer app. Deployed to Vercel via git integration:
**a push to `main` is a production deploy.** Treat `main` as production.

## Hard rules
1. Never commit or push to `main`. Work on a branch. The human merges.
2. Never add a dependency. If a task seems to need one, stop and say so.
3. Never run dependency upgrades, `npm audit fix`, or codemods.
4. Never reformat, reorder, or reindent a file you were not asked to change.
   A diff must contain only the lines the task requires.
5. Ask before deleting any file.

## Deliberate decisions — do not undo
- **framer-motion was removed on purpose** (commit 72e080d, cut ~18% of JS).
  Animation is one shared IntersectionObserver plus CSS fades, with
  prefers-reduced-motion honored. Do not add an animation library.
- Decorative blur/blend/pulse blobs are desktop-only; mobile gets a static
  radial gradient. Navbar backdrop-blur is desktop-only. Performance decision.
- The YouTube embed is a tap-to-play facade deferring ~1.3 MB until intent.
  Do not replace it with a plain iframe.
- Social URLs live in `src/lib/links.ts`. Never hardcode one in a component.
- Hero image is a drop-in file at `public/hero-screenshot.webp`.
- Substack feed is fetched server-side with 1h revalidate. No rss2json, no
  client-side feed fetching.

## Known and accepted
- Knowledge-hub pages carry pre-existing lint errors (unescaped apostrophes).
  Do not "fix" them as a side effect of an unrelated task.

## Copy work
This site is the public source of truth for game rules. Lineups lock WEEKLY,
not monthly. Copy describing a monthly lock, a monthly Starting 5 decision, or
a month-long scoring period is stale and wrong. Copy edits change text nodes
only: never package.json, never src/lib/, never component structure or props.

## Definition of done
`npm run build` passes and `npm run lint` shows no NEW errors beyond the known
pre-existing ones. Report both, with counts, before claiming done.