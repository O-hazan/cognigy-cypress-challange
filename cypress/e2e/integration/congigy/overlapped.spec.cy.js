/// <reference types="Cypress" />

context("page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/overlapped");
  });

  it("Text is entered correctly after scrolling it into view", () => {
    cy.get("#name").should("be.visible");
    cy.get("#name").scrollIntoView().type("omer");
    cy.get("#name").should("have.value", "omer");
  });
});
