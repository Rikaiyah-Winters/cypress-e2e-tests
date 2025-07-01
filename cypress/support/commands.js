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


Cypress.Commands.add('addToCart', (itemName) => {
    cy.contains('[data-test="inventory-item"]', itemName).within(() => {
        cy.get('button').click() 
    })
})

Cypress.Commands.add('getByDataTest', (dataTestName) => {
    return cy.get(`[data-test="${dataTestName}"]`)
})

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
  cy.getByDataTest('checkout').click();

  if (firstName) {
    cy.getByDataTest('firstName').type(firstName);
  }

  if (lastName) {
    cy.getByDataTest('lastName').type(lastName);
  }

  if (postalCode) {
    cy.getByDataTest('postalCode').type(postalCode);
  }

  cy.getByDataTest('continue').click();

  // Only check for success if all fields were filled
  if (firstName && lastName && postalCode) {
    cy.getByDataTest('finish').click();
    cy.getByDataTest('title').should('contain', "Complete!");
    cy.getByDataTest('complete-header').should('have.text', "Thank you for your order!");
  }
});


Cypress.Commands.add('removeItem', (itemName) => {
    cy.contains('[data-test="inventory-item"]', itemName).find('button').click()
})

Cypress.Commands.add('checkCartCount', (expectedCount) => {
    cy.getByDataTest('shopping-cart-badge').should('have.text', `${expectedCount}`);
});