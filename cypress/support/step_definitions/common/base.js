import { Given } from "cypress-cucumber-preprocessor/steps";

Given('user is in the Cypress example page', () => {
    cy.visit('/')
});