describe('Cart Actions - Add and Remove Items', () => {
    beforeEach(() => {
        cy.loginFromFixture();
    });

    it('Adds two items to cart', () => {
        cy.addToCart('Fleece Jacket');
        cy.addToCart('T-Shirt');
        cy.checkCartCount(2);

        cy.getByDataTest('shopping-cart-link').click();
        cy.getByDataTest('inventory-item').should('have.length', 2);
    });

    it('Removes item from cart', () => {
        cy.addToCart('Backpack');
        cy.addToCart('Fleece Jacket');
        cy.checkCartCount(2);

        cy.getByDataTest('shopping-cart-link').click();
        cy.getByDataTest('inventory-item').should('have.length', 2);

        cy.removeItem('Backpack');
        cy.checkCartCount(1);
        cy.getByDataTest('inventory-item').should('have.length', 1);
    });
});