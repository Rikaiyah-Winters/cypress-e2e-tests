# Cypress E2E Tests for SauceDemo

This repo contains end-to-end tests for [saucedemo.com](https://www.saucedemo.com).
It demonstrates best practices for Cypress testing with an organized structure, reusable commands, and data-driven tests.

**Tech Stack:** Cypress · Mocha + Chai syntax

---

## Features

- ✅ Login flow (positive & negative scenarios)
- 🛒 Add to cart and checkout flows
- 🧾 UI validations: price, product info, inventory
- 🧪 Custom Cypress commands
- 🔁 Session caching with `cy.session()`
- 🧱 Mocked API tests with `cy.intercept()`

---

## Sample Test Run (Complete e2e Checkout Flow)
```bash
npx cypress run --spec "cypress/e2e/checkout/*.cy.js"
 ```

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/cypress-e2e-tests.git
cd cypress-e2e-tests

```
### 2. Install dependencies and Open Cypress Test Runner

`npm install` <br>
`npx cypress open` <br>
or run headlessly: `npx cypress run`

## Folder Structure

- cypress/e2e/ – organized by feature (auth, cart, checkout, UI, API)

- cypress/fixtures/ – test data (e.g. users, item info)

- cypress/support/ – custom commands

- mocked-data-test-ui.html – standalone UI for mocked API testing