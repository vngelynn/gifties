import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

const counter = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers: {
    increment: (state: number, action: PayloadAction<number>) => state + action.payload,
    decrement: (state: number) => state - 1,
  }
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;