import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { WishGiftItem, GiftItem } from './../types';

const initialState: WishGiftItem[] = [];

export const wishlistSlice = createSlice<WishGiftItem[], SliceCaseReducers<WishGiftItem[]>, 'wishList'>({
  name: 'wishList',
  initialState,

  reducers: {
    setWishList: (state, action: PayloadAction<WishGiftItem[]>) => action.payload,
    addWish: (state, action: PayloadAction<WishGiftItem>) => {
      state.push(action.payload);
      return state;
    },
    updateWish: (state, action: PayloadAction<WishGiftItem>) => {
      return state.map((giftItem) => giftItem.id === action.payload.id ? action.payload : giftItem);
    },
    deleteWish: (state, action: PayloadAction<WishGiftItem>) =>
     state.filter((giftItem) => giftItem.id !== action.payload.id),
  }
});

export const { setWishList, addWish, updateWish, deleteWish } = wishlistSlice.actions;

export default wishlistSlice.reducer;
