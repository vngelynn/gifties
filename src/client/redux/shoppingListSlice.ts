import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

import { ShoppingGiftItem } from './../types';

const initialState: ShoppingGiftItem[] = [];

export const wishlistSlice = createSlice<ShoppingGiftItem[], SliceCaseReducers<ShoppingGiftItem[]>, 'shoppingList'>({
  name: 'shoppingList',
  initialState,

  reducers: {
    setShoppingList: (state, action: PayloadAction<ShoppingGiftItem[]>) => action.payload,
    addGift: (state, action: PayloadAction<ShoppingGiftItem>) => {
      state.push(action.payload);
      return state;
    },
    updateGift: (state, action: PayloadAction<GiftItem>) => {
      return state.map((giftItem) => giftItem.id === action.payload.id ? action.payload : giftItem);
    },
    deleteGift: (state, action: PayloadAction<GiftItem>) =>
     state.filter((giftItem) => giftItem.id !== action.payload.id),
  }
});

export const { setShoppingList, addGift, updateGift, deleteGift } = wishlistSlice.actions;

export default wishlistSlice.reducer;
