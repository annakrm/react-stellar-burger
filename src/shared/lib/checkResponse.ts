export const checkResponse = (response: Response): Promise<string> => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка: ${response.status}`);
};
