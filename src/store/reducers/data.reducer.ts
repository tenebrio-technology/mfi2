import { createReducer } from "@reduxjs/toolkit";
import { DataActions } from "..";
import { IUser } from "../../model";

interface DataState {
  fetching: boolean;
}

export interface DataStates {
  [key: string]: DataState;
}

const initialState: DataStates = {
  location: { fetching: false },
};

export const dataReducer = createReducer<DataStates>(
  initialState,
  (builder) => {
    builder.addCase(DataActions.fetch, (state, action) => {
      state.location.fetching = true;
    });
  },
);
