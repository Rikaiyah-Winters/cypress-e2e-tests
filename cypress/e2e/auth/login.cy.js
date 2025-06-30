describe('Log in with one user', () => {
    beforeEach(() => {
        cy.loginFromFixture()
    })

    it('verify login with standard user', () => {
        cy.url().should('include', '/inventory.html')
    })
})