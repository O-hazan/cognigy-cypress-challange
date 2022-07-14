/// <reference types="Cypress" />

context("Dynamic table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dynamictable");
  });

  it("Compare the Chrome CPU vlaue in the table to the yellow label value", () => {
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
