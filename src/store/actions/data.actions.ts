import { createAction } from "@reduxjs/toolkit";
import { LoginFormEntry } from "../../model/forms/login.schema";

export const DataActions = {
  fetch: createAction("data/fetch"),
  update: createAction("data/update"),
  delete: createAction("data/delete"),
};
