import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ShoppinglistState {
  value: number
}

// Define the initial state using that type
const initialState: ShoppinglistState = {
  value: 0,
}

export const shoppinglistSlice = createSlice({
  
  initialState,
  reducers: {

  },
})

export const {  } = shoppinglistSlice.actions;

export default shoppinglistSlice.reducer;