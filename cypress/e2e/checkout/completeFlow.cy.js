describe('Log in, add 2 items to cart, verify prices, and check out', () => {
    it('Full flow with two items', () => {
        cy.loginFromFixture(); //using custom command plus fixture
        cy.addToCart('Fleece Jacket');
        cy.addToCart('T-Shirt');
        cy.getByDataTest('shopping-cart-badge').should('have.text', '2');
        cy.getByDataTest('shopping-cart-link').click();
        cy.getByDataTest('inventory-item').should('have.length', 2);
        cy.checkout('Jane', 'Doe', '90210')
    })
})