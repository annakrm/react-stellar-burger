const apiConfig = {
    baseUrl: 'https://norma.nomoreparties.space/api',
  }

export const getData = () => {
    return fetch(`${apiConfig.baseUrl}/ingredients`, {
        headers: {
          authorization: ''
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const makeOrder = (ingredientIds) => {
  // TODO: Мокаем запрос т.к.  почему-то возврщает POST https://norma.nomoreparties.space/api/orders при корректном значении body все равно возвращает ошибку {"success":false,"message":"Ingredient ids must be provided"}
  // Даже пример из документации не работает "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]

  return  {
    "name": "Краторный метеоритный бургер",
    "order": {
        "number": 6257
    },
    "success": true
  };

  // return fetch(`${apiConfig.baseUrl}/orders`, {
  //     method: 'POST',
  //     headers: {
  //       authorization: ''
  //     },
  //     body: JSON.stringify({ ingredients: ingredientIds }),
  //   })
  //   .then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     }

  //     return Promise.reject(`Ошибка: ${res.status}`);
  // }).catch((error) => console.error(error));
}

