/// <reference types="Cypress" />

context("Ajax data", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/ajax");
  });

  it("Click and wait for server response and verify server response is displayed", () => {
    cy.intercept({
      method: "GET",
      url: "http://localhost:3000/ajaxdata",
    }).as("dataGetFirst");
    cy.get("#ajaxButton").click();
    cy.get("#spinner").should("be.visible");
    cy.wait("@dataGetFirst").then((i) => {
      cy.get("#content p").should("have.text", `${i.response.body}`);
    });
    cy.get("#spinner").should("not.be.visible");
  });
});
