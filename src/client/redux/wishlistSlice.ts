import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { GiftItem } from './../types';
// need to create types file

const initialState: GiftItem[] = [
  {
    id: 100,
    label: 'Nintendo 64 with Mario Karts',
    description: `It's the best game ever, please`,
    link: 'www.nintendo.com'
  },
  {
    id: 121,
    label: 'Trains',
    description: `The wooden one, please`,
    link: 'www.trains.com'
  },
  {
    id: 111,
    label: 'Barbie Dream House',
    description: `The biggest one you can find, please`,
    link: 'www.barbie.com'
  }
];

export const wishlistSlice = createSlice<GiftItem[], SliceCaseReducers<GiftItem[]>, "wishList">({
  name: "wishList",
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

export const { setWishList, addWish, updateWish, deleteWish } = wishlistSlice.actions;

export default wishlistSlice.reducer;
