import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers: {
    increment: (state: number, action: PayloadAction<number | undefined>) => state + (action.payload ? action.payload : 1),
    decrement: (state: number) => state - 1,
  }
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;
