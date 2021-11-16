import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

import { Bestie } from '../types';

const initialState: Bestie[] = [];

export const wishlistSlice = createSlice<Bestie[], SliceCaseReducers<Bestie[]>, 'besties'>({
  name: 'besties',
  initialState,

  reducers: {
    setBesties: (state, action: PayloadAction<Bestie[]>) => action.payload,
    addBestie: (state, action: PayloadAction<Bestie>) => {
      state.push(action.payload);
      return state;
    },
    deleteBestie: (state, action: PayloadAction<Bestie>) =>
      state.filter((bestie) => bestie.id !== action.payload.id),
  }
});

export const { setBesties, addBestie, deleteBestie } = wishlistSlice.actions;

export default wishlistSlice.reducer;
