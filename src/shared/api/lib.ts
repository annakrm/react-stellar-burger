import { apiConfig } from "./config";

export type RequestOptions = Partial<
  Omit<Request, "body" | "headers"> & {
    body: string;
    headers: { authorization: string };
  }
>;

export const checkResponse = <T>(response: Response): Promise<T> => {
  if (response.ok) {
    return response.json();
  }

  return response.json().then((err) => Promise.reject(err));
};

export const request = <T>(
  endpoint: string,
  options: RequestOptions
): Promise<T> => {
  const { baseUrl } = apiConfig;
  const headers = {
    ...apiConfig.headers,
    ...(options.headers ? ((options.headers as unknown) as object) : {}),
  };

  console.log(">>>", apiConfig, options);

  return fetch(`${baseUrl}/${endpoint}`, {
    headers,
    ...options,
  }).then((response: Response) => checkResponse<T>(response));
};
