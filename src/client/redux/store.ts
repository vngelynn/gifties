import { createStore, combineReducers } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import bestiesReducer from './bestiesSlice';
import wishlistReducer from './wishlistSlice';
import shoppingListReducer from './shoppingListSlice';

const combinedReducers = combineReducers({
  user: userReducer,
  besties: bestiesReducer,
  wishList: wishlistReducer,
  shoppingList: shoppingListReducer,
});

export default createStore(combinedReducers);
