describe('Log in with one user', () => {
    beforeEach(() => {
        cy.loginFromFixture(1)
    })

    it('Should show error', () => {
        cy.get('[data-test="error"]').should('exist').and('be.visible');
    })
})