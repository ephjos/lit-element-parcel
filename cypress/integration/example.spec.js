/// <reference types="cypress" />

context('Example', () => {
  beforeEach(() => {
    cy.visit('localhost:1234');
  });

  it('uses the right charset', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  })

  it('has a window object', () => {
    expect(cy.window()).to.exist;
  })
});
