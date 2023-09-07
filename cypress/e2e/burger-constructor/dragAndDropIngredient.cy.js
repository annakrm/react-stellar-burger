/// <reference types="cypress" />

context('Drag & drop an ingredient to the Burger Constructor', () => {
  before(() => {
    cy.visit('/');
  });


  it('should drag & drop an ingredient to the Burger Constructor', () => {
    cy.get('#sauces-category [class^=IngredientsListItem_wrapper__]').first().as('sauceBurgerIngredient');
    cy.get('[class^=BurgerConstructor_ingredientsList__]').first().as('burgerConstructorIngredientsList');

    cy.get('@sauceBurgerIngredient').dragTo('@burgerConstructorIngredientsList')
    cy.get('@sauceBurgerIngredient').dragTo('@burgerConstructorIngredientsList')
    cy.get('@sauceBurgerIngredient').dragTo('@burgerConstructorIngredientsList')
    cy.get('@sauceBurgerIngredient').dragTo('@burgerConstructorIngredientsList')

    cy.get('@burgerConstructorIngredientsList').children('[class^=BurgerConstructor_itemWrapper__]').should('have.length', 4);
  });
})
