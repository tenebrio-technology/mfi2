
import { createEpicMiddleware } from 'redux-observable';
import { epics, rootReducer } from '.';
import { useDispatch, useSelector } from 'react-redux'; 
import type { TypedUseSelectorHook } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit';

export * from './actions';
export * from './reducers';
export * from './epics';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), epicMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 

epicMiddleware.run(epics as any);
