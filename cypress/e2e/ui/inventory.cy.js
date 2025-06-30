const itemNames = require('../fixtures/sauce-demo-items.json')

describe('Inventory Checker', () => {
    beforeEach(() => {
        cy.session('standard_user', () => {
            cy.loginFromFixture(); // logs in once and reuses session
        });

        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
        cy.url().should('include', '/inventory.html');
    });

    //create a fixture with all of the item names and then loop through them
    itemNames.forEach(({ name, price }) => {
        it(`Checking if ${name} has name, description, and price`, () => {
            cy.verifyItemBlock(name, price)
        })
    })

    it('adds an item to the cart and confirms the count', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');
        
    })
})