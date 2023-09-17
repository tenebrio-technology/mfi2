import { createAction } from "@reduxjs/toolkit";
import { LoginFormEntry } from "../../model/forms/login.schema";

export const AuthActions = {
  login: createAction<LoginFormEntry>("auth/login"),
  loginSuccess: createAction<any>("auth/login/success"),
  loginFail: createAction<string>("auth/login/fail"),
  logout: createAction("auth/logout"),
  logoutSuccess: createAction("auth/logout/success"),
  setToken: createAction<string | null>("auth/settoken"),
};
