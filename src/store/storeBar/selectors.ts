import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.storeBar || initialState;

export const selectStoreBar = createSelector(
  [selectSlice],
  state => state,
);
