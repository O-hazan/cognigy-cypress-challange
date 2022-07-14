/// <reference types="Cypress" />

context("homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dynamictable");
  });

  it("Dynamic Table", () => {
    cy.contains("Chrome CPU")
      .invoke("text")
      .then((text) => {
        let trimmedText = text.trim();
        trimmedText = trimmedText.substring(12);
        cy.get("div[role=table]")
          .contains("Chrome")
          .parent()
          .contains("%")
          .should("have.text", trimmedText);
        cy.wrap(trimmedText).as("text1");
      });
  });
});
