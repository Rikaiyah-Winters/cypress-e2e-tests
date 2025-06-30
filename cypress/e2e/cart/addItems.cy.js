describe('Use command to add something to cart', () => {
    before(() => {
        cy.loginFromFixture();
    })

    it('Adds Fleece Jacket to cart', () => {
        cy.addToCart('Fleece Jacket')
        cy.addToCart('T-Shirt')
        cy.getByDataTest('shopping-cart-badge').should('have.text', '2');
        cy.getByDataTest('shopping-cart-link').click();
        cy.getByDataTest('inventory-item').should('have.length', 2);
    })

})