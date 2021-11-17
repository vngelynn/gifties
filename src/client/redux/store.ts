import { createStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Bestie, GiftItem, ShoppingGiftItem } from './../types';
import userReducer, { UserState } from './userSlice';
import bestiesReducer from './bestiesSlice';
import wishListReducer from './wishListSlice';
import shoppingListReducer from './shoppingListSlice';

export type AppState = {
  user: UserState;
  besties: Bestie[];
  wishList: GiftItem[];
  shoppingList: ShoppingGiftItem[];
}

const combinedReducers = combineReducers({
  user: userReducer,
  besties: bestiesReducer,
  wishList: wishListReducer,
  shoppingList: shoppingListReducer,
});

export default createStore(
  combinedReducers,
  process.env.NODE_ENV === 'production' ? composeWithDevTools() : undefined
);
