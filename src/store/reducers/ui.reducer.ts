import { createReducer } from "@reduxjs/toolkit";
import { UIActions } from "../actions";
import { IUser } from "../../model";

export interface UIState {
  showMenubar: boolean;
}

const initialState: UIState = {
  showMenubar: true,
};

export const uiReducer = createReducer<UIState>(initialState, (builder) => {
  builder.addCase(UIActions.toggleMenubar, (state, action) => {
    state.showMenubar = !state.showMenubar;
  });
});
