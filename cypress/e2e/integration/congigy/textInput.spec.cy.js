/// <reference types="Cypress" />

context("Text input", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/textinput");
  });

  it("Button name changes according to user input", () => {
    cy.get("#newButtonName").type("button");
    cy.get("#updatingButton").click().should("have.text", "button");
  });
});
