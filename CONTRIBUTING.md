# Contributing

Contributions are always welcome, no matter how large or small!

We aim to foster a welcoming and respectful community. Please make sure to read our [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

## 🧱 Development Workflow

This project uses a monorepo structure with [`npm workspaces`](https://docs.npmjs.com/cli/v9/using-npm/workspaces). It includes:

- The core design system library
- An example React app in the `example/` folder that demonstrates usage

### 🔧 Getting Started

Install all dependencies from the root directory:

```bash
npm install
```

> ⚠️ Do not use `yarn` for development as the project is configured with `npm workspaces`.

To run the development server and work on the library and example app simultaneously:

```bash
npm run dev
```

This will start the Vite-powered dev server for the example app using the local version of the library. Any changes you make to the library source will reflect immediately in the example app.

### 📱 Running the Example App

Start the example React app to test your component updates:

```bash
cd example
npm run dev
```

Make sure to keep this running while developing.

### ✅ Linting & Testing

We use TypeScript for type checking, ESLint + Prettier for code formatting, and Jest for testing.

To run linting:

```bash
npm run lint
```

To automatically fix formatting issues:

```bash
npm run lint -- --fix
```

To run the test suite:

```bash
npm run test
```

### 📖 Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/) standard:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Refactoring code
- `test`: Adding or updating tests
- `chore`: Maintenance and tooling

Commit messages are validated using a pre-commit hook.

### 📜 Scripts Overview

- `npm install` – Install all dependencies
- `npm run dev` – Start dev server with live preview
- `npm run lint` – Lint and format code
- `npm run test` – Run unit tests
- `npm run build` – Build the library for production

## 🚀 Sending a Pull Request

> First PR? Check out this guide: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

Steps:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with a descriptive message
5. Push your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request 🚀

Please keep PRs focused and small. Ensure tests and linters pass, and update documentation if necessary.