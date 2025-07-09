/// <reference types="cypress" />
import 'cypress-each';

describe('Check title of different websites', () => {
  it.each([
    'https://www.saucedemo.com/',
    'https://duckduckgo.com/',
    'https://www.cypress.io/',
  ])('Verify title of %s and its title', present => {
    cy.visit(present);
    cy.title().then(title => {
      cy.log(`Title of ${present} is: ${title}`);
      expect(title).to.not.be.empty;
    });
  });
});
