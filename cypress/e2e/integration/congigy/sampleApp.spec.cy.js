/// <reference types="Cypress" />

context("Sample app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/sampleapp");
  });

  it("User can login with various user names and the UI updates accrodignly", () => {
    cy.fixture("sampleApp").then((data) => {
      console.log(data.data);
      let testusers = data.data;
      for (let i = 0; i < testusers.length; i++) {
        cy.get("input[name=UserName]")
          .type(`${testusers[i].username}`)
          .should("have.value", `${testusers[i].username}`);
        cy.get("input[name=Password]").type("pwd").should("have.value", "pwd");
        cy.get("#login").should("have.text", "Log In").click();
        cy.get(".text-success").should(
          "have.text",
          `${testusers[i].resultText}`
        );
        cy.get("#login").should("have.text", "Log Out");
        cy.get("input[name=UserName]").should("have.text", "");
        cy.get("input[name=Password]").should("have.text", "");
        cy.get("#login").click();
      }
    });
  });
});

it("Error is displayed when user name is missing", () => {
  cy.visit("http://localhost:3000/sampleapp");
  cy.get("input[name=Password]").type("pwd").should("have.value", "pwd");
  cy.get("#login").should("have.text", "Log In").click();
  cy.get("#loginstatus").should("have.text", "Invalid username/password");
});

it("Error is displayed when user and password are missing", () => {
  cy.visit("http://localhost:3000/sampleapp");
  cy.get("#login").should("have.text", "Log In").click();
  cy.get("#loginstatus").should("have.text", "Invalid username/password");
});

it("Error is displayed when password is wrong", () => {
  cy.visit("http://localhost:3000/sampleapp");
  cy.get("input[name=UserName]").type("name").should("have.value", "name");
  cy.get("input[name=Password]")
    .type("wrongPassword")
    .should("have.value", "wrongPassword");
  cy.get("#login").should("have.text", "Log In").click();
  cy.get("#loginstatus").should("have.text", "Invalid username/password");
});
