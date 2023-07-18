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
