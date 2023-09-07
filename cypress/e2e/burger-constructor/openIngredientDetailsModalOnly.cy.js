/// <reference types="cypress" />

context('Open ingredient details modal', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });


  it('should open ingredient details modal only', () => {
    cy.get('[class^=IngredientsListItem_wrapper__]').first().as('burgerIngredient');

    cy.get('@burgerIngredient').click();

    cy.get('[class^=Modal_modal__]').first().as('burgerIngredientDetailsModal');
  });
})
