/// <reference types="Cypress" />

context("homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/textinput");
  });

  it("Text Input", () => {
    cy.get("#newButtonName").type("button");
    cy.get("#updatingButton").click().should("have.text", "button");
  });
});
