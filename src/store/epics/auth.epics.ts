import { map, mergeMap } from "rxjs/operators";
import { from, filter, tap } from "rxjs";
import { services } from "../../services";

import { EpicCollection, AuthActions } from "..";

export const authEpics: EpicCollection = {
  login: (action$) =>
    action$.pipe(
      filter(AuthActions.login.match),
      tap(() => console.log("login")), 
      mergeMap(({ payload }) =>
        from(services.auth.login(payload)).pipe(
          tap((payload) => console.log("payload:", payload)),
          map((payload) => {
            if (payload.success && payload.token) {
              services.auth.storeToken(payload.token);
              return AuthActions.loginSuccess(payload);
            } else
              return AuthActions.loginFail(
                payload.errors ? payload.errors[0] : "Unknown error",
              );
          }),
        ),
      ),
    ),

  logout: (action$) =>
    action$.pipe(
      filter(AuthActions.logout.match),
      mergeMap(() =>
        from(services.auth.clearToken()).pipe(
          map(() => AuthActions.logoutSuccess()),
        ),
      ),
    ),
};

export default Object.entries(authEpics).map(([_, epic]) => epic);
