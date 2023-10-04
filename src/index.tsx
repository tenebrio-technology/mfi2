import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RootState, epics, rootReducer } from './store';
import { createEpicMiddleware } from 'redux-observable';
import { Action } from 'redux-actions';

import App from './App';
import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';

const root = createRoot(document.getElementById('root') as HTMLElement);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), epicMiddleware],
});

epicMiddleware.run(epics as any);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
