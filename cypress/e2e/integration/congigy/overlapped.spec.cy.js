/// <reference types="Cypress" />

context("homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/overlapped");
  });

  it("cy.Overlapped Element() - Scroll to element and set value", () => {
    cy.get("#name").should("be.visible");
    cy.get("#name").scrollIntoView().type("omer");
    cy.get("#name").should("have.value", "omer");
  });
});
