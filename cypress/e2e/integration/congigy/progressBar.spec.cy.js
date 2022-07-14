/// <reference types="Cypress" />

context("homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/progressbar");
  });

  it("Should stop the progress bar at 75%", () => {
    cy.get("#startButton").click();
    cy.get(`div[aria-valuenow="75"]`, { timeout: 100000 });
    cy.get("#stopButton").click();
  });
});
