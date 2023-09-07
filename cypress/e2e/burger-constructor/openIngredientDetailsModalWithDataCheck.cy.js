/// <reference types="cypress" />

context('Open ingredient details modal and check its content', () => {
  before(() => {
    cy.visit('/');
  });

  it('should open ingredient details modal and check its content', () => {
    cy.get('[class^=IngredientsListItem_wrapper__]').first().as('burgerIngredient');

    cy.get('@burgerIngredient').click();

    cy.get('[class^=Modal_modal__]').first().as('burgerIngredientDetailsModal');
    cy.get('[class^=IngredientDetails_contentWrapper__] [class^=ingredientDetailsName]').first().as('ingredientDetailsName');
    cy.get('[class^=IngredientDetails_contentWrapper__] [class^=ingredientDetailsCallories]').first().as('ingredientDetailsCallories');
    cy.get('[class^=IngredientDetails_contentWrapper__] [class^=ingredientDetailsProteins]').first().as('ingredientDetailsProteins');
    cy.get('[class^=IngredientDetails_contentWrapper__] [class^=ingredientDetailsFats]').first().as('ingredientDetailsFats');
    cy.get('[class^=IngredientDetails_contentWrapper__] [class^=ingredientDetailsCarbs]').first().as('ingredientDetailsCarbs');

    cy.get('@ingredientDetailsName').should('not.have.text', '');
    cy.get('@ingredientDetailsCallories').should('not.have.text', '');
    cy.get('@ingredientDetailsProteins').should('not.have.text', '');
    cy.get('@ingredientDetailsFats').should('not.have.text', '');
    cy.get('@ingredientDetailsCarbs').should('not.have.text', '');
  });
})
