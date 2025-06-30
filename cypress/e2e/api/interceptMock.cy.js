describe('User List UI', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://example.com/api/users', {
      statusCode: 200,
      body: [
        { name: 'Jane Doe', email: 'jane@example.com' },
        { name: 'John Smith', email: 'john@example.com' }
      ]
    }).as('getUsers');

    cy.visit('mocked-data-test-ui.html'); // Replace with your actual file path or URL
  });

  it('renders the user list title', () => {
    cy.get('h1').should('contain', 'User List');
  });

  it('displays all mocked users in the list', () => {
    cy.get('#user-list li').should('have.length', 2);
    cy.get('#user-list li').first().should('contain', 'Jane Doe');
    cy.get('#user-list li').last().should('contain', 'John Smith');
  });

   it('shows error when API fails', () => {
    cy.intercept('GET', 'https://example.com/api/users', {
      statusCode: 500,
      body: {}
    }).as('getUsersError');

    cy.visit('mocked-data-test-ui.html'); // re-visiting with error intercept

    cy.get('#user-list li')
      .should('have.length', 1)
      .and('contain', 'Error loading users');
  }); 
});