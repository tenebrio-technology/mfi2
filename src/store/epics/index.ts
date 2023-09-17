import { Epic, combineEpics } from "redux-observable";

import coreEpics from "./core.epics";
import uiEpics from "./ui.epics";
import authEpics from "./auth.epics";

export interface EpicCollection {
  [key: string]: Epic;
}

export const epics = combineEpics(...coreEpics, ...uiEpics, ...authEpics);
