describe('Log in, add 2 items to cart, verify prices, and check out', () => {
    beforeEach(() => {
        cy.loginFromFixture();
    })

    it('Full flow with two items', () => {
        cy.addToCart('Fleece Jacket');
        cy.addToCart('T-Shirt');
        cy.checkCartCount(2);
        cy.getByDataTest('shopping-cart-link').click();
        cy.getByDataTest('inventory-item').should('have.length', 2);
        cy.getByDataTest('inventory-item').each((item) => {
            cy.wrap(item).should('contain.text', 'Sauce Labs');
        });
        cy.checkout('Jane', 'Doe', '90210')
    })
})