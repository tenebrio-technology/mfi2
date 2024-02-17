import { IServiceResponse } from ".";
import { IUser } from "..";


export interface ILoginResponse extends IServiceResponse {
  user?: null | IUser;
  token?: null | string;
}


export class LoginResponse implements ILoginResponse {
  success = false;
}

export interface ILoginCredentials {
  username: string;
  password: string;
}

export class LoginCredentials implements ILoginCredentials {
  username = '';
  password = '';
}


