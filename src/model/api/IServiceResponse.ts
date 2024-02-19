export interface IServiceResponse {
  success: boolean;
  errors?: string[];
  message?: string;
  payload?: any;
}
