// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Constants from "./constants";

Cypress.Commands.add("LoginPepper", () => {

  cy.visit(Constants.PEPPER_LOCATION);

  cy.origin(Constants.AUTH0_LOCATION, {
    args: {
      username: Constants.PEPPER_USER,
      password: Constants.PEPPER_PASSWORD
    }
  }, ({ username, password }) => {
    cy.get('#username').should('be.visible').type(username);
    cy.get('#password').should('be.visible').type(password);
    cy.contains('Continue').click({ force: true });
  })
})