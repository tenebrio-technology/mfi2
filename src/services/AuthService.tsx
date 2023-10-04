import { BaseService, ServiceResponse } from './BaseService';
import { IUser } from '../model/User';
import { AxiosError } from 'axios';

interface ILoginCredentials {
  username: string;
  password: string;
}

class LoginCredentials implements ILoginCredentials {
  username = '';
  password = '';
}

interface ILoginResponse extends ServiceResponse {
  user?: null | IUser;
  token?: null | string;
}

class LoginResponse implements ILoginResponse {
  success = false;
}

export class AuthService extends BaseService {
  async login(credentials: ILoginCredentials): Promise<ILoginResponse> {
    let response;
    console.log('called with: ', credentials);

    try {
      response = await this.services.api.post('/login', credentials);
    } catch (err: AxiosError | any) {
      this.logger.error('API error', err);
      return this.errorResponse(err.message);
    }

    return response.data;
  }

  async storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  async getToken() {
    return localStorage.getItem('token');
  }

  async clearToken() {
    localStorage.removeItem('token');
  }

  async verifyToken(token: string): Promise<boolean> {
    let response;
    try {
      response = await this.services.api('/verifyToken', token);
    } catch (err: AxiosError | any) {
      if (err.response?.status == 401) {
        return false;
      }
      throw err;
    }
    return !!response;
  }
}
