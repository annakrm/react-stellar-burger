export const checkResponse = <T>(response: Response): Promise<T> => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка: ${response.status}`);
};
