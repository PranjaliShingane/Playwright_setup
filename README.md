# Playwright Automation

This project contains a Playwright-based UI automation framework for end-to-end testing.

## Features

- Playwright test setup with TypeScript
- Page Object Model structure
- Environment-based configuration support
- Allure reporting integration
- Browser automation examples and login flow tests

## Prerequisites

- Node.js 18 or later
- npm

## Installation

```bash
npm install
npx playwright install
```

## Run tests

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/e2e/login_SOLID.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Generate an HTML report:

```bash
npx playwright show-report
```

## Project structure

```text
.
├── config/                 # environment configuration
├── fixtures/               # test fixtures
├── pages/                  # page object files
├── tests/                  # test specs
├── package.json            # project dependencies and scripts
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json           # TypeScript config
├── .gitignore              # ignored files and folders
└── README.md               # project documentation
```

## Notes

Generated Playwright output such as reports, artifacts, and local environment variables are intentionally ignored by Git to keep the repository clean.
