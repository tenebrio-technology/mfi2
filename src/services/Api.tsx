import axios from 'axios';
import { ILogger } from './Logger';

export class Api {
  token: string | null = null;
  defaultRequest: any = null;
  baseURL: string | null = null;
  logger: ILogger | null = null;

  constructor(baseURL: string, logger: ILogger) {
    this.baseURL = baseURL;
    this.token = null;
    this.logger = logger;
    this.defaultRequest = {
      method: 'get',
      baseURL,
    };
  }

  async get(url: string): Promise<any> {
    console.log('Api.get');
    console.log('token: ', this.token);
    let request: any = {
      ...this.defaultRequest,
      url,
      method: 'get',
      headers: { Authorization: 'Bearer ' + this.token },
    };
    return await axios(request);
  }

  async post(url: string, payload: any): Promise<any> {
    let request: any = {
      ...this.defaultRequest,
      url,
      method: 'POST',
      data: payload,
      headers: { Authorization: 'Bearer ' + this.token },
    };
    this.logger?.debug('payload:', payload, url, request);
    return axios(request);
  }
}
