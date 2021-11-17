import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

import { Page } from '../types';

const initialState: Page = Page.Login;

const pageSlice = createSlice<Page, SliceCaseReducers<Page>, 'page'>({
  name: 'page',
  initialState: initialState,
  reducers: {
    setPage: (_state: Page, action: PayloadAction<Page>) => action.payload,
  }
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
