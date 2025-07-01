const testCases = require('../../fixtures/form-validation.json')

describe('Missing Fields during checkout blocks progress', () => {
    beforeEach(() => {
        cy.session('standard_user', () => {
            cy.loginFromFixture();
        });
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
        cy.url().should('include', '/inventory.html');
    });

    testCases.forEach(({ label, firstName, lastName, postalCode, expectedError }) => {
        it(`${label}`, () => {
            cy.addToCart('Bike');
            cy.getByDataTest('shopping-cart-link').click();
            cy.checkout(firstName, lastName, postalCode);
            cy.getByDataTest('error').should('be.visible').and('contain', expectedError);
        })
    })

})