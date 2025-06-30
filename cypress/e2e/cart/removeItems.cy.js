describe('Remove an item from cart', () => {
    before(() => {
        cy.loginFromFixture();
    })

    it('remove first item from cart', () => {
        cy.addToCart('Backpack');
        cy.addToCart('Fleece Jacket');

        //perhaps make a command for checking shopping cart badge?
        cy.getByDataTest('shopping-cart-badge').should('have.text', '2');
        cy.getByDataTest('shopping-cart-link').click();
        cy.getByDataTest('inventory-item').should('have.length', 2);

        cy.removeItem('Backpack');
        cy.getByDataTest('shopping-cart-badge').should('have.text', '1');
        cy.getByDataTest('inventory-item').should('have.length', 1);
    })
})