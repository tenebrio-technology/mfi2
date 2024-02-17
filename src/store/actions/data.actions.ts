import { createAction } from '@reduxjs/toolkit';

export const DataActions = {
  fetch: createAction('data/fetch'),
  update: createAction('data/update'),
  delete: createAction('data/delete'),
};
