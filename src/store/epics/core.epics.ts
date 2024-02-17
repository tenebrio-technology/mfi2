import { from, of, concat  } from 'rxjs';
import { tap, map, mergeMap, filter } from 'rxjs';
import { services } from '../../services';

import { CoreActions, AuthActions } from '..';
import { EpicCollection } from '.';

const coreEpics: EpicCollection = {

  initialize: action$ => 
    action$.pipe(
      filter(CoreActions.initialize.match),
      map(() => CoreActions.initialized())),

  initialized: action$ => 
      action$.pipe(
        filter(CoreActions.initialized.match),
        map(() => ({type: 'stop'})),
      ),

};

export default Object.entries(coreEpics).map(([_, epic]) => epic);
