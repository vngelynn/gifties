import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { GiftItem } from '../types';

const initialState: GiftItem[] = [];

export const wishListSlice = createSlice<GiftItem[], SliceCaseReducers<GiftItem[]>, 'wishList'>({
  name: 'wishList',
  initialState,

  reducers: {
    setWishList: (state, action: PayloadAction<GiftItem[]>) => action.payload,
    addWish: (state, action: PayloadAction<GiftItem>) => {
      state.push(action.payload);
      return state;
    },
    updateWish: (state, action: PayloadAction<GiftItem>) => {
      return state.map((giftItem) => giftItem.id === action.payload.id ? action.payload : giftItem);
    },
    deleteWish: (state, action: PayloadAction<GiftItem>) =>
      state.filter((giftItem) => giftItem.id !== action.payload.id),
  }
});

export const { setWishList, addWish, updateWish, deleteWish } = wishListSlice.actions;

export default wishListSlice.reducer;
