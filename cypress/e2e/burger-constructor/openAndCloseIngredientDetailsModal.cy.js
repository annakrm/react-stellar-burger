/// <reference types="cypress" />

context('Open and close the ingredient details modal', () => {
  before(() => {
    cy.visit('/');
  });


  it('should open and close ingredient details modal', () => {
    cy.get('[class^=IngredientsListItem_wrapper__]').first().as('burgerIngredient');

    cy.get('@burgerIngredient').click();

    cy.get('[class^=Modal_modal__]').first().as('burgerIngredientDetailsModal');
    cy.get('[class^=Modal_closeButton__]').first().as('modalCloseButton');

    cy.get('@modalCloseButton').click();
  });
})
