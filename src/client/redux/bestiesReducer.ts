import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface BestiesState {
  value: number
}

// Define the initial state using that type
const initialState: BestiesState = {
  value: 0,
}

export const bestiesSlice = createSlice({
  
  initialState,
  reducers: {

  },
})

export const {  } = bestiesSlice.actions;

export default bestiesSlice.reducer;