import { createStore, combineReducers } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import bestiesReducer from './bestiesSlice';
import wishListReducer from './wishListSlice';
import shoppingListReducer from './shoppingListSlice';

const combinedReducers = combineReducers({
  user: userReducer,
  besties: bestiesReducer,
  wishList: wishListReducer,
  shoppingList: shoppingListReducer,
});

export default createStore(combinedReducers);
