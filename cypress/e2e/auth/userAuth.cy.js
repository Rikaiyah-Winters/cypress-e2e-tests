const users = require('../../fixtures/users.json')

describe('User Authentication Test', () => {
    users.forEach(({ username, password }) => {
        it(`${username} login flow`, () => {
            cy.login(username, password);

            if (username === 'standard_user') {
                cy.url().should('include', '/inventory.html');
                cy.getByDataTest('inventory-list').should('exist');
            } else if (username === 'locked_out_user') {
                cy.getByDataTest('error').should('be.visible').and('contain', 'locked out');
                cy.url().should('not.include', '/inventory.html')
            } else {
                cy.getByDataTest('error').should('be.visible').and('contain', 'do not match')
            }
        })
    })
})