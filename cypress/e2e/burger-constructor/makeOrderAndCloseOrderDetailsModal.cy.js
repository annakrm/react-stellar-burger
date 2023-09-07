/// <reference types="cypress" />

context('Drag & drop an ingredient to the Burger Constructor', () => {
  before(() => {
    cy.visit('http://localhost:3000/login');
    cy.clearLocalStorage();
    cy.get('[class^=Login_inputWrapper__] input[name="email"]').first().type('alll.laaaa@yandex.com');
    cy.get('[class^=Login_inputWrapper__] input[name="password"]').first().type('1231231235');
    cy.get('[class^=Login_inputWrapper__] button[type="submit"]').first().click();
  });

  it('should login and drag & drop an ingredient to the Burger Constructor', () => {
    // cy.intercept('POST', 'https://norma.nomoreparties.space/api/orders', { body: { sucess: true, name: 'sjnjksdfnjksnd', order: { number: 11111 } } })
    // cy.intercept('POST', 'https://norma.nomoreparties.space/api/auth/login', { body: { sucess: true, user: { name: 'sfnsldkfm', email: 'alll.laaaa@yandex.com' }, accessToken: '24jjsdkmlflsd', refreshToken: 'sofinownfoie' } })

    cy.get('#buns-category [class^=IngredientsListItem_wrapper__]').first().as('bunBurgerIngredient');
    cy.get('#sauces-category [class^=IngredientsListItem_wrapper__]').first().as('sauceBurgerIngredient');
    cy.get('#main-category [class^=IngredientsListItem_wrapper__]').first().as('mainBurgerIngredient');
    cy.get('[class^=BurgerConstructor_ingredientsList__]').first().as('burgerConstructorIngredientsList');

    cy.get('@bunBurgerIngredient').dragTo('@burgerConstructorIngredientsList')
    cy.get('@sauceBurgerIngredient').dragTo('@burgerConstructorIngredientsList')
    cy.get('@mainBurgerIngredient').dragTo('@burgerConstructorIngredientsList')
    cy.get('@sauceBurgerIngredient').dragTo('@burgerConstructorIngredientsList')
    cy.get('@mainBurgerIngredient').dragTo('@burgerConstructorIngredientsList')

    cy.get('@burgerConstructorIngredientsList').children('[class^=BurgerConstructor_itemWrapper__]').should('have.length', 4);

    cy.get('[class^=BurgerConstructor_orderButtonWrapper__] button').first().as('makeOrderButton');
    cy.get('@makeOrderButton').click();

    cy.get('[class^=Modal_closeButton]', { timeout: 20000 }).first().as('closeModalButton');
    cy.get('@closeModalButton').click();
  });
})
