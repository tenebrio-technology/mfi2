import { combineReducers } from 'redux';

import { coreReducer, CoreState } from './core.reducer';
import { uiReducer, UIState } from './ui.reducer';
import { authReducer, AuthState } from './auth.reducer';
import { dataReducer, DataStates } from './data.reducer';

export const rootReducer = combineReducers({
  core: coreReducer,
  auth: authReducer,
  ui: uiReducer,
  data: dataReducer,
});
