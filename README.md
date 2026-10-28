# Blissworld

A local, frontend-only Next.js catalogue built around an interactive opening book. Uses TypeScript, Tailwind CSS and GSAP. There is no database, authentication, checkout or contact submission service.

## Run

With Node.js 20.9+ and pnpm installed:

```sh
pnpm install
pnpm dev
```

Open http://127.0.0.1:3000. Production: `pnpm build`, then `pnpm start`. Type checks: `pnpm typecheck`. Asset/data checks: `pnpm test:catalogue`. To also check the running routes: `pnpm test:catalogue --url http://127.0.0.1:3000`.

The initial setup used the desktop app’s bundled Node and pnpm. On macOS, the included `Start Blissworld.command` launcher uses an installed Node.js or the desktop app’s bundled runtime when available.

## Catalogue and branding

- `src/data/catalogue.ts` holds the five categories and 19 products. It separates supplied photographs from generated concepts and supports optional variants.
- The repository includes all photographs needed to run the website. Optimised WebP copies of the supplied collections and faithful single-product crops are in `public/images/originals`. Original JPEG files remain in the source workspace.
- `public/images/editorial` contains generated promotional compositions. Concept items and editorials are visibly labelled. These are not confirmed inventory.
- The official logo is preserved as a WebP copy, with a cropped monogram for compact navigation use. Generated promotional marks are interpretations of that supplied identity; the original remains the source of truth.
- No product prices, stock, material specifications or company history were invented. Product names are descriptive catalogue labels.

See `ASSETS.md` for source-to-output mapping.

## Interaction

The book opens automatically after a short pause and can be opened manually. Use next/previous, chapter buttons, a horizontal swipe or arrow keys while the book has focus. Desktop shows a two-page spread; mobile adapts to a single page. Reduced motion opens the book and changes pages immediately. Visitors can skip directly to collections.

The catalogue combines category filters, name/colour search and A–Z/Z–A sorting. Product pages include original collection views when available. The enquiry page prepares and copies a message without sending or storing it. If clipboard access is unavailable, the prepared text remains selectable.

## Replacing concepts and adding contact details

Replace concept records with confirmed products and update their provenance, concept flag, copy, and image paths. Add genuine business contact links to the enquiry page when available; do not show a successful submission without a real destination.

## Reference

The supplied 17.625-second reel was inspected using extracted frames. It contains a brief layered editorial website demonstration and prompt-tool promotion, rather than a complete book walkthrough. The supplied written design brief is therefore the primary source for the physical book interaction.
