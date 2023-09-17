import { Epic } from "redux-observable";
import { Observable, timer, from, of, iif } from "rxjs";
import {
  tap,
  exhaustMap,
  map,
  mergeMap,
  filter,
  catchError,
  delay,
} from "rxjs/operators";
import { services } from "../../services";

import { CoreActions, AuthActions } from "..";
import { EpicCollection } from ".";

const coreEpics: EpicCollection = {
  initialize: (action$) =>
    action$.pipe(
      filter(CoreActions.initialize.match),
      tap(() => console.log("Initialize Epic")),
      mergeMap(() =>
        from(services.auth.getToken()).pipe(
          map((token) =>
            token ? AuthActions.setToken(token) : CoreActions.initialized(),
          ),
        ),
      ),
    ),

  setToken: (action$) =>
    action$.pipe(
      filter(AuthActions.setToken.match),
      tap((action) => (services.api.token = action.payload)),
      map((token) => CoreActions.initialized()),
    ),
};

export default Object.entries(coreEpics).map(([_, epic]) => epic);
