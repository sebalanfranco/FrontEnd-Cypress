import { When, Then } from "cypress-cucumber-preprocessor/steps";

When(/^user clicks on "([^"].*)" command category$/, (commandCategory) => {
    cy.get('.home-list')
      .contains(commandCategory)
      .click()
});

When(/^user clicks on "([^"].*)" command in "([^"].*)" category$/, (command, commandCategory) => {
    cy.get('.home-list')
      .contains(commandCategory)
      .parent()
      .contains(command)
      .click()
});

Then(/^user should be redirected to "([^"].*)" url$/, (url) => {
    cy.url()
      .should('eq', Cypress.config().baseUrl + url.toLowerCase())
});

Then(/^user should see the title "([^"].*)"$/, (title) => {
    cy.contains('h1', title)
      .should('be.visible')
});

Then(/^user should see the subtitle "([^"].*)"$/, (subtitle) => {
    cy.contains('h4', subtitle)
      .should('be.visible')
});
