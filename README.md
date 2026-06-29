# FSD Architecture Starter

A lightweight React, Vite, and TypeScript starter organized with Feature-Sliced Design.

## Quick Start with fsd

```bash
npm install
npm run dev
npm run build
```

## Structure

```text
src/
  app/       App entry, providers, routing, and global styles
  pages/     Route-level screens
  widgets/   Large composed page sections
  features/  User actions and feature flows
  entities/  Business entities and domain models
  shared/    Reusable UI, helpers, config, and assets
```

## Where To Start

- Replace the welcome screen in `src/pages/welcome`.
- Create route-level screens in `src/pages`.
- Add composed sections in `src/widgets`.
- Keep user actions in `src/features`.
- Put reusable primitives in `src/shared`.

## Demo Data

The landing page uses a small typed config file at `src/shared/config/template-info.ts`.
It is intentionally static so the starter has no API dependency or business logic.

## Quality Commands

```bash
npm run ci
git diff --check
npm audit --omit=dev
```
