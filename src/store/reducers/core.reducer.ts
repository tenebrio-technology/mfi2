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
      state.initialized = true;
    })

    .addCase(CoreActions.networkError, (state, action) => {
      state.networkError = true;
    })

    .addCase(CoreActions.clearNetworkError, (state, action) => {
      state.networkError = false;
    });
});
