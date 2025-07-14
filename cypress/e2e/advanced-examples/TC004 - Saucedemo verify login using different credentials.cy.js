/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
import LoginPage from '../../support/pageObjects/LoginPage';
import { CONST_VAR } from '../../support/pageObjects/Constants';

describe('TC004 - Saucedemo verify login using different credentials', () => {
  const randomEmail = faker.internet.email();
  const loginPage = new LoginPage();
  const standardUser = 'standard_user';
  const password = 'secret_sauce';

  beforeEach(() => {
    cy.fixture('navigation/pageURL').then(pageURL => {
      globalThis.pageURL = pageURL;
    });
    cy.visit('/');
  });

  it(`Login using: ${randomEmail} as a test user and verify error message`, () => {
    loginPage.getDataQA(CONST_VAR.Username).type(randomEmail);
    loginPage.getDataQA(CONST_VAR.Password).type('invalidPassword');
    loginPage.getDataQA(CONST_VAR.LoginButton).click();
    loginPage.getDataQA(CONST_VAR.errorBtn).should('be.visible');
    loginPage.errorCircleIcons().should('be.visible').and('have.length', 2);
  });

  it.only(`Login using: ${standardUser} as a test user and verify error message`, () => {
    loginPage.getDataQA(CONST_VAR.Username).type(standardUser);
    loginPage.getDataQA(CONST_VAR.Password).type(password);
    loginPage.getDataQA(CONST_VAR.LoginButton).click();
    loginPage.menuButton().should('be.visible');
    cy.url().should('include', pageURL.landingPage.inventory); // Fixtures file use example
    cy.title().should('eq', 'Swag Labs');
    loginPage.title().should('contain.text', 'Products');
    loginPage.inventoryItem().should('have.length.greaterThan', 2);
  });

  after(() => {
    cy.logoutSession();
  });
});
