import { tap, map, filter } from 'rxjs';

import { UIActions, EpicCollection } from '../';

const uiEpics: EpicCollection = {
  toggelMenubar: (action$, state) =>
    action$.pipe(
      filter(UIActions.toggleMenubar.match),
      tap(() => console.log('toggleMenubar epic', JSON.stringify(state.value.core))),
      map(() => ({ type: 'end' })),
    ),
};

export default Object.entries(uiEpics).map(([_, epic]) => epic);
