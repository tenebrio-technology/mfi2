import { createAction } from '@reduxjs/toolkit';
import { LoginFormEntry } from '../../model/schemas/login.schema';
import { ILoginResponse } from '../../model';

export const AuthActions = {
  login: createAction<LoginFormEntry>('auth/login'),
  verifyToken: createAction<string | null>('auth/verifytoken'),
  loginSuccess: createAction<ILoginResponse>('auth/login/success'),
  loginFail: createAction<string>('auth/login/fail'),
  logout: createAction('auth/logout'),
  logoutSuccess: createAction('auth/logout/success'),
  setToken: createAction<string>('auth/settoken'),
};
