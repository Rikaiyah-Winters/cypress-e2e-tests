This repo contains end-to-end tests for [saucedemo.com](https://www.saucedemo.com).
This poject demonstrates my ability to write effective Cypress tests for e-commerce flows.
I maintain an organized test structure by using fixtures and reusable commands.

<b>Tech Stack</b>: Cypress, Mocha + Chai syntax

## Features

- ✅ Login flow (positive & negative)
- 🛒 Add to cart and checkout
- 🧾 UI validations: price, product info, inventory
- 🧪 Custom commands
- 🔁 Session caching with `cy.session()`
- 🧱 Mocked API tests with `cy.intercept()`

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
