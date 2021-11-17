import { createStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Page, Bestie, GiftItem, ShoppingGiftItem } from './../types';
import pageReducer from './pageSlice';
import userReducer, { UserState } from './userSlice';
import bestiesReducer from './bestiesSlice';
import wishListReducer from './wishListSlice';
import shoppingListReducer from './shoppingListSlice';


export type AppState = {
  page: Page,
  user: UserState;
  besties: Bestie[];
  wishList: GiftItem[];
  shoppingList: ShoppingGiftItem[];
}

const combinedReducers = combineReducers({
  page: pageReducer,
  user: userReducer,
  besties: bestiesReducer,
  wishList: wishListReducer,
  shoppingList: shoppingListReducer,
});

export default createStore(
  combinedReducers,
  process.env.NODE_ENV === 'production' ? composeWithDevTools() : undefined
);
