import { Before } from "cypress-cucumber-preprocessor/steps";

Before({ tags: "@clearCookies" }, () => {
    cy.clearCookies()
});
