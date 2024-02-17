import { createAction } from '@reduxjs/toolkit';

export enum ActionTypes {
  initialize = 'core/initialize',
  initialized = 'core/initialized',
  setToken = 'core/setToken',
  fetchUser = 'core/fetchUser',
  tokenVerifySuccess = 'core/tokenVerifySuccess',
  tokenVerifyFail = 'core/tokenVerifyFail',
  networkError = 'core/networkError',
  clearNetworkError = 'core/clearNetworkError',
  authenticate = 'auth/authenticate',
  loaded = 'core/loaded',
  login = 'auth/login',
  loginSuccess = 'auth/login/success',
  loginFail = 'auth/login/fail',
  logout = 'auth/logout',
  logoutSuccess = 'auth/logout/success',
  toggleSidebar = 'ui/toggleSidebar',
  openEntityDialog = 'ui/openEntityDialog',
  closeEntityDialog = 'ui/closeEntityDialog',
  rest = 'rest',
}

export const CoreActions = {
  initialize: createAction(ActionTypes.initialize),
  initialized: createAction(ActionTypes.initialized),
  fetchUser: createAction(ActionTypes.fetchUser),
  tokenVerifySuccess: createAction(ActionTypes.tokenVerifySuccess),
  tokenVerifyFail: createAction(ActionTypes.tokenVerifyFail),
  networkError: createAction<string>(ActionTypes.networkError),
  clearNetworkError: createAction(ActionTypes.clearNetworkError),
  openEntityDialog: createAction(ActionTypes.openEntityDialog),
  closeEntityDialog: createAction(ActionTypes.closeEntityDialog),
};
