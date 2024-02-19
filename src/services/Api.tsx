import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ILogger } from './Logger';

export interface ApiResult {
  success: boolean;
  message?: string;
  response?: AxiosResponse;
}

export class Api {
  private token: string | null = null;
  defaultRequest: AxiosRequestConfig;
  baseURL: string | null = null;
  logger: ILogger;

  constructor(baseURL: string, logger: ILogger) {
    this.baseURL = baseURL;
    this.token = null;
    this.logger = logger;
    this.defaultRequest = {
      method: 'get',
      baseURL,
    };
  }

  setToken(token: string) {
    this.token = token;
    this.defaultRequest = {
      ...this.defaultRequest,
      headers: { Authorization: 'Bearer ' + this.token },
    };
  }

  async get(url: string): Promise<ApiResult> {
    let request: any = {
      ...this.defaultRequest,
      url,
    };
    return await this.request(request);
  }

  async post(url: string, payload: any): Promise<ApiResult> {
    let request: AxiosRequestConfig = {
      ...this.defaultRequest,
      url,
      method: 'POST',
      data: payload,
    };
    return await this.request(request);
  }
  async del(url: string, payload: any): Promise<ApiResult> {
    let request: AxiosRequestConfig = {
      ...this.defaultRequest,
      url,
      method: 'DELETE',
    };
    return await this.request(request);
  }

  async request(request: AxiosRequestConfig): Promise<ApiResult> {
    let response: AxiosResponse;
    this.logger.debug('api request', request);
    try {
      response = await axios(request);
      this.logger.debug('api response', response);
    } catch (ex) {
      this.logger.error('api error: ', ex);
      if (ex instanceof Error) {
        return { success: false, message: ex.message };
      }
      return { success: false };
    }

    return response.data;
  }
}
