# Turborepo starter

This is an official pnpm starter turborepo.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

-   `sandbox/next-app`: a [Next.js](https://nextjs.org/) app
-   `web/react-app`: another [Next.js](https://nextjs.org/) app
-   `ui`: a stub React component library shared by both `web` and `docs` applications
-   `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
-   `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd smart-console
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd smart-console
pnpm run dev
```
