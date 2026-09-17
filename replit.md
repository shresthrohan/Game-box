# GameBox

GameBox is a responsive browser arcade for playing ten classic mini-games with local score persistence.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/gamebox run dev` — run the GameBox web app through its managed workflow
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/gamebox/src/data/games.ts` — central game metadata and category data
- `artifacts/gamebox/src/components/games.tsx` — playable game implementations
- `artifacts/gamebox/src/components/shell.tsx` — shared navbar and footer
- `artifacts/gamebox/src/pages/` — home, library, about, game route, and 404 pages
- `artifacts/gamebox/src/index.css` — shared arcade theme and responsive layout

## Architecture decisions

- GameBox is frontend-only by design; the games do not need an account, API, or database.
- LocalStorage is used only for durable player-facing records such as best scores and lifetime stats.
- Game routes use one shared page shell so every game keeps the same navigation, instructions, and replay pattern.

## Product

The app includes a landing page, searchable and filterable library, about page, responsive navigation, and ten playable games: Tic-Tac-Toe, Wordle, Dots & Boxes, Memory Match, 2048, Snake, Hangman, Connect Four, Rock Paper Scissors, and Number Guessing.

## User preferences

The requested visual direction is a modern dark arcade aesthetic that stays polished and avoids childish excess.

## Gotchas

- The GameBox Vite build expects `PORT` and `BASE_PATH` from its managed workflow; direct shell builds need those values supplied.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
