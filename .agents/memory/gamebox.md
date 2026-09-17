---
name: GameBox product boundary
description: The arcade is intentionally a frontend-only, local-first experience.
---

GameBox should remain a frontend-only mini-games hub unless the user explicitly changes the product scope. Durable scores and statistics belong in browser LocalStorage, not an account system or database.

**Why:** The product is designed for instant play without accounts, loading screens, or a backend dependency.

**How to apply:** Keep new games self-contained, use the shared route shell, and persist only player-facing records that are useful across rematches.