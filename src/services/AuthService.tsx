import { ILoginCredentials, ILoginResponse } from '../model';
import { ApiResult } from './Api';
import { BaseService } from './BaseService';

export class AuthService extends BaseService {

  async login(credentials: ILoginCredentials): Promise<ILoginResponse> {

    const result = await this.services.api.post('/login', credentials);
    if (result.success) return this.successResponse(result.message, result.payload);
    else return this.errorResponse(result.message, result.errors);
  }

  async verifyToken(token: string | null): Promise<ILoginResponse> {
    let result: ApiResult;
    try {
      result = await this.services.api.post('/verifytoken', { token });
    } catch (err: any) {
      this.logger.error('API error', err);
      return this.errorResponse(err.message);
    }
    return result;
  }

  storeToken(token: string | null) {
    if (!token) this.clearToken();
    else localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}
