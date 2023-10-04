import { createReducer } from '@reduxjs/toolkit';
import { CoreActions } from '..';
import { IUser } from '../../model';

export interface CoreState {
  initialized: boolean;
  authToken?: string | null;
  networkError?: boolean;
  user?: IUser;
}

const initialState: CoreState = {
  initialized: false,
};

export const coreReducer = createReducer<CoreState>(initialState, (builder) => {
  builder

    .addCase(CoreActions.initialized, (state, action) => {
      console.log('initialized reducer');
      state.initialized = true;
    })

    .addCase(CoreActions.networkError, (state, action) => {
      console.log('networkError reducer', action);
      state.networkError = true;
    })

    .addCase(CoreActions.clearNetworkError, (state, action) => {
      console.log('clear Network Error reducer');
      state.networkError = false;
    });
});
