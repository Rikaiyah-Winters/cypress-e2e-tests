describe('User List UI - Success Case', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://example.com/api/users', {
      statusCode: 200,
      body: [
        { name: 'Jane Doe', email: 'jane@example.com' },
        { name: 'John Smith', email: 'john@example.com' }
      ]
    }).as('getUsers');

    cy.visit('mocked-data-test-ui.html');
    cy.wait('@getUsers');
  });

  it('renders the user list title', () => {
    cy.get('h1').should('contain', 'User List');
  });

  it('displays all mocked users in the list', () => {
    cy.get('#user-list li').as('users');
    cy.get('@users').should('have.length', 2);
    cy.get('@users').each((user) => {
      cy.wrap(user).should('match', 'li').and('contain.text', '@');
    });
    cy.get('@users').first().should('contain', 'Jane Doe');
    cy.get('@users').last().should('contain', 'John Smith');
  });
});

describe('User List UI - Error Case', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://example.com/api/users', {
      statusCode: 500,
      body: {}
    }).as('getUsersError');

    cy.visit('mocked-data-test-ui.html');
    cy.wait('@getUsersError')
  });

  it('shows error when API fails', () => {
    cy.get('#user-list li')
      .should('have.length', 1)
      .and('contain', 'Error loading users');
  });
})