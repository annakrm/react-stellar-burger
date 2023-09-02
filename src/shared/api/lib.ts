import { apiConfig } from "./config";

export const checkResponse = <T>(response: Response): Promise<T> => {
  if (response.ok) {
    return response.json();
  }

  return response.json().then((err) => Promise.reject(err));
};

export const request = <T>(
  endpoint: string,
  options: Record<string, string>
): Promise<T> => {
  const { baseUrl, headers } = apiConfig;

  return fetch(`${baseUrl}/${endpoint}`, {
    headers,
    ...options,
  }).then((response: Response) => checkResponse<T>(response));
};
