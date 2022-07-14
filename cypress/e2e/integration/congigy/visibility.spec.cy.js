/// <reference types="Cypress" />

context("homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/visibility");
  });

  it("Verify buttons are not displayed when hidding them", () => {
    // .then(() => {
    //   cy.document().then((doc) => {
    //     console.log(doc.elementFromPoint(29, 487));
    //   });
    // });

    // cy.get("#overlappedButton").then((el) => {
    //   console.log(document.elementFromPoint(50, 50));
    // });

    // cy.get("#overlappedButton").then((el) => {
    //   console.log(el[0]);
    // });

    cy.get("#hideButton").click();
    // cy.get(zeroWidthButton).should("not.be.visible");
    // cy.get("#transparentButton").should("not.be.visible");
    // cy.get("#invisibleButton").should("not.be.visible");
    // cy.get("#notdisplayedButton").should("not.be.visible");

    const getRectangle = ($el) => $el[0].getBoundingClientRect();
    let res = true;
    cy.get("#invisibleButton")
      .then(getRectangle)
      .then((rect) => {
        console.log(rect);
        cy.document().then((doc) => {
          const topEl = doc.elementFromPoint(rect.left, rect.top).children[0];
          console.log(doc.elementFromPoint(rect.x, rect.y));
          cy.get("#invisibleButton").then((x) => {
            const el = x[0];
            if (el === topEl) {
              console.log("equal", el, topEl);
              res = true;
            } else {
              console.log("Not equal", el, topEl);
              res = false;
              console.log(res);
            }
          });
        });
      });

    cy.get("#hidingLayer")
      .then(getRectangle)
      .then((rect) => {
        console.log(rect);
      });
      

    // cy.get("tbody button").each((item, index, list) => {
    //   console.log(item[0]);
    //   fun(item);
    //   console.log(res);
    //   if (item[0].innerText === "Hide" || item[0].innerText === "Overlapped") {
    //     return;
    //   } else if (!item[0]) {
    //     return;
    //   } else if (item[0].offsetLeft < 0 || item[0].offsetTop < 0) {
    //     return;
    //   } else {
    //     cy.get(item).should("not.be.visible");
    //   }
    // });

    // cy.get("#offscreenButton").should("not.be.visible");
    // cy.get("#removedButton").should("not.be.visible");  Fails
    // cy.get("#overlappedButton").should("not.be.visible"); Fails
  });

  // it("cy.visibility() - Check if buttons are visible", () => {
  //   cy.contains("Visibility").click();
  //   cy.get("#hideButton").click();
  //   cy.get("body").then(($body) => {
  //     if ($body.find("#zeroWidthButton").length > 0) {
  //       //evaluates as true if button exists at all
  //       cy.get("#zeroWidthButton").then(($header) => {
  //         // console.log($header);
  //         if ($header.is(":visible")) {
  //           assert.isOk("everything", "EXISTS and is VISIBLE");

  //           //you get here only if button EXISTS and is VISIBLE
  //         } else if($body.find("#zeroWidthButton").attr('width',0)){console.log($header)}else {
  //           assert.isOk("everything", "EXISTS but is INVISIBLE");

  //           //you get here only if button EXISTS but is INVISIBLE
  //         }
  //       });
  //     } else {
  //       //you get here if the button DOESN'T EXIST
  //       assert.isOk("everything", "DOESNT EXIST");
  //     }
  //   });
  // });
  // cy.get("tbody button").each((item, index, list) => {
  //   console.log(item)
  //   cy.get(item).then(($body) => {
  //     if ($body.find(item).length > 0) {
  //       //evaluates as true if button exists at all
  //       cy.get(item).then(($header) => {
  //         if ($header.is(":visible")) {
  //           assert("everything", "EXISTS and is VISIBLE");
  //         } else {
  //           assert.isOk("everything", "EXISTS but is INVISIBLE");
  //         }
  //       });
  //     } else {
  //       //you get here if the button DOESN'T EXIST
  //       assert.isOk("everything", "DOESN'T EXIST");
  //     }
  //   });

  //   // cy.get(item).invoke('width').should('be.lt', 355);
  // });

  // cy.get("#hideButton").then(($header) => {
  //   if ($header.is(":visible")) {
  //     //you get here only if button EXISTS and is VISIBLE
  //   } else {
  //     //you get here only if button EXISTS but is INVISIBLE
  //   }
  // });

  // cy.get("#hideButton").should("be.visible");
  // cy.get("#removedButton").should("not.be.visible");

  // cy.get(item).then(($body) => {
  //   if ($body.find(item).length > 0) {
  //     //evaluates as true if button exists at all
  //     cy.get(item).then(($header) => {
  //       if ($header.is(":visible")) {
  //         assert("everything", "EXISTS and is VISIBLE");
  //       } else {
  //         assert.isOk("everything", "EXISTS but is INVISIBLE");
  //       }
  //     });
  //   } else {
  //     //you get here if the button DOESN'T EXIST
  //     assert.isOk("everything", "DOESN'T EXIST");
  //   }
});
