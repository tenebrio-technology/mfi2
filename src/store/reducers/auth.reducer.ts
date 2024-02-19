import { createReducer } from '@reduxjs/toolkit';
import { AuthActions } from '..';
import { IUser } from '../../model';

export interface AuthState {
  authToken?: string | null;
  authenticated: boolean;
  authenticating: boolean;
  authenticationFailed: boolean;
  lastError?: string | null;
  user?: IUser | null;
}

const initialState: AuthState = {
  authenticated: false,
  authenticating: false,
  authenticationFailed: false,
};

export const authReducer = createReducer<AuthState>(initialState, (builder) => {
  builder

    .addCase(AuthActions.setToken, (state, { payload }) => {
      state.authToken = payload;
      state.authenticated = true;
    })

    .addCase(AuthActions.login, (state, action) => {
      state.authenticating = true;
      state.authenticationFailed = false;
    })

    .addCase(AuthActions.loginSuccess, (state, { payload }) => {
      state.authToken = payload.token;
      state.user = payload.user;
      state.authenticating = false;
      state.authenticationFailed = false;
      state.authenticated = true;
    })

    .addCase(AuthActions.loginFail, (state, action) => {
      state.authenticating = false;
      state.authenticationFailed = true;
      state.lastError = action.payload;
    })

    .addCase(AuthActions.logoutSuccess, (state) => {
      state.authToken = null;
      state.user = undefined;
      state.authenticated = false;
    });
});
