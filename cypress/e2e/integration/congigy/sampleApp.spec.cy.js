/// <reference types="Cypress" />

const testusers = [
  {
    username: "omer",
    resultText: `Welcome, omer!`,
  },
  {
    username: "עומר",
    resultText: `Welcome, עומר!`,
  },
  {
    username:
      "veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylongusername",
    resultText: `Welcome, veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylongusername!`,
  },
  {
    username: `!@#$%^&*()_+":>|}{`,
    resultText: `Welcome, !@#$%^&*()_+":>|}{!`,
  },
];

context("homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/sampleapp");
  });

  it("Sample App - User can login with various user names and the UI updates accrodignly", () => {
    for (let i = 0; i < testusers.length; i++) {
      cy.get("input[name=UserName]")
        .type(`${testusers[i].username}`)
        .should("have.value", `${testusers[i].username}`);
      cy.get("input[name=Password]").type("pwd").should("have.value", "pwd");
      cy.get("#login").should("have.text", "Log In").click();
      cy.get(".text-success").should("have.text", `${testusers[i].resultText}`);
      cy.get("#login").should("have.text", "Log Out");
      cy.get("input[name=UserName]").should("have.text", "");
      cy.get("input[name=Password]").should("have.text", "");
      cy.get("#login").click();
    }
  });
});

it("Sample App - Error is displayed when user name is missing", () => {
  cy.visit("http://localhost:3000/sampleapp");
  cy.get("input[name=Password]").type("pwd").should("have.value", "pwd");
  cy.get("#login").should("have.text", "Log In").click();
  cy.get("#loginstatus").should("have.text", "Invalid username/password");
});

it("Sample App - Error is displayed when user and password are missing", () => {
  cy.visit("http://localhost:3000/sampleapp");
  cy.get("#login").should("have.text", "Log In").click();
  cy.get("#loginstatus").should("have.text", "Invalid username/password");
});

it("Sample App - Error is displayed when password is wrong", () => {
  cy.visit("http://localhost:3000/sampleapp");
  cy.get("input[name=UserName]").type("name").should("have.value", "name");
  cy.get("input[name=Password]")
    .type("wrongPassword")
    .should("have.value", "wrongPassword");
  cy.get("#login").should("have.text", "Log In").click();
  cy.get("#loginstatus").should("have.text", "Invalid username/password");
});
