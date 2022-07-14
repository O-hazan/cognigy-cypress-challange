/// <reference types="Cypress" />

context("Visibility", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/visibility");
  });

  it("Buttons are not visible after clicking the hide button", () => {
    cy.get("#hideButton").click();
    cy.get("tbody button").each((item, index, list) => {
      const getRectangle = ($el) => $el[0].getBoundingClientRect();
      cy.get(item)
        .then(getRectangle)
        .then((rect) => {
          cy.document().then((doc) => {
            let midRectL = rect.left + 3;
            let midRectT = rect.top + 3;
            const topEl = doc.elementFromPoint(midRectL, midRectT);
            if (
              !topEl ||
              !topEl.id ||
              item[0].innerText === "Hide" ||
              topEl.id !== item[0].id
            ) {
              return;
            } else {
              cy.get(item).should("not.be.visible");
            }
          });
        });
    });
  });
});
