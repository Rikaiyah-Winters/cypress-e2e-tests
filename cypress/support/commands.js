Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('loginFromFixture', (userIndex = 0) => {
    cy.fixture('users').then((users) => {
        const user = users[userIndex];
        return cy.login(user.username, user.password)
    })
})

Cypress.Commands.add('verifyItemBlock', (itemName, expectedPrice) => {
    cy.contains('[data-test="inventory-item"]', itemName).within(() => {
        cy.get('[data-test="inventory-item-name"]').should('contain', itemName);
        cy.get('[data-test="inventory-item-desc"]').invoke('text').should('not.be.empty');
        cy.get('[data-test="inventory-item-price"]').invoke('text').then((priceText) => {
            const price = parseFloat(priceText.replace('$', ''));
            expect(price).to.equal(expectedPrice);
            expect(price).to.be.greaterThan(0)
        })
    })
})

//custom command to add items to cart
Cypress.Commands.add('addToCart', (itemName) => {
    cy.contains('[data-test="inventory-item"]', itemName).within(() => {
        cy.get('button').click() //i think this is good since we want to keep things flexible
    })
})

Cypress.Commands.add('getByDataTest', (dataTestName) => {
    return cy.get(`[data-test="${dataTestName}"]`)
})

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.getByDataTest('firstName').type('Jane');
    cy.getByDataTest('lastName').type('Doe');
    cy.getByDataTest('postalCode').type('90210');
    cy.getByDataTest('continue').click()
    cy.getByDataTest('finish').click();
    cy.getByDataTest('title').should('contain', "Complete!")
    cy.getByDataTest('complete-header').should('have.text', "Thank you for your order!")
})

//remove from cart (the first item in the cart)
Cypress.Commands.add('removeItem', (itemName) => {
    cy.contains('[data-test="inventory-item"]', itemName).find('button').click()
})
