import { AxiosError } from "axios";

export type APIResponse<T> = {
  success: boolean;
  data?: T;
  error?: AxiosError;
};
