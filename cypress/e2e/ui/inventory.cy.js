const items = require('../../fixtures/sauce-demo-items.json')

describe('Inventory UI Display', () => {
    beforeEach(() => {
        cy.session('standard_user', () => {
            cy.loginFromFixture();
        });

        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
        cy.url().should('include', '/inventory.html');
    });

    items.forEach(({ name, price }) => {
        it(`Checking if ${name} has name, description, and price`, () => {
            cy.verifyItemBlock(name, price)
        })
    })
})