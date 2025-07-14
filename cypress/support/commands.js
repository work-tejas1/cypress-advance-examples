// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import LoginPage from '../support/pageObjects/LoginPage';
import { CONST_VAR } from '../support/pageObjects/Constants';
const loginPage = new LoginPage();

Cypress.Commands.add('logoutSession', () => {
  Cypress.log({
    name: 'Logout_Session',
    displayName:
      'Logout Session. Clear cookies and local storage, visit login page',
  });
  cy.clearCookies({ log: false });
  cy.clearLocalStorage({ log: false });
  cy.reload({ log: false });
  loginPage
    .getDataQA(CONST_VAR.LoginButton)
    .should('be.visible')
    .and('not.be.disabled');
  cy.log('User is logged out');
});
