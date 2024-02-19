import { map, mergeMap, tap } from 'rxjs/operators';
import { from, filter, of } from 'rxjs';
import { services } from '../../services';

import { EpicCollection, AuthActions } from '..';

export const authEpics: EpicCollection = {
  login: (action$) =>
    action$.pipe(
      filter(AuthActions.login.match),
      mergeMap(({ payload }) =>
        from(services.auth.login(payload)).pipe(
          map((result) => {
            console.log('Payload:', result);
            if (result.success && result.payload.token) {
              services.auth.storeToken(result.payload.token);
              services.api.setToken(result.payload.token!);
              return AuthActions.loginSuccess(result.payload);
            } else return AuthActions.loginFail(result.errors ? result.errors[0] : 'Unknown error');
          }),
        ),
      ),
    ),

  setToken: (action$) =>
    action$.pipe(
      filter(AuthActions.setToken.match),
      map(({ payload }) => AuthActions.verifyToken(payload)),
    ),

  verifyToken: (action$) =>
    action$.pipe(
      filter(AuthActions.verifyToken.match),
      mergeMap(({ payload }) =>
        from(services.auth.verifyToken(payload)).pipe(
          map((result) => {
            if (result.success) {
              services.api.setToken(result.payload.token!);
              return AuthActions.loginSuccess(result.payload);
            } else {
              services.auth.clearToken();
              return AuthActions.loginFail(result.errors ? result.errors[0] : 'Unknown error');
            }
          }),
        ),
      ),
    ),

  logout: (action$) =>
    action$.pipe(
      filter(AuthActions.logout.match),
      mergeMap(() => of(services.auth.clearToken()).pipe(map(() => AuthActions.logoutSuccess()))),
    ),
};

export default Object.entries(authEpics).map(([_, epic]) => epic);
