export type DefaultResponse = ResponseSuccess & {
  message: string;
};

export type ResponseSuccess = {
  success: boolean;
};
