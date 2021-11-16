import { createSlice, createAction, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

import { User } from './../types';

export type UserState = null | User;

const initialState: UserState = null;

const userSlice = createSlice<UserState, SliceCaseReducers<UserState>, "user">({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<UserState>) => action.payload,
    changeName: (state: UserState, action: PayloadAction<string>) => {
      if (state === null) throw Error('Attempted to use changeName action before user was set in Redux store.');
      
      state.name = action.payload;
      return state;
    },
    changeEmail: (state: UserState, action: PayloadAction<string>) => {
      if (state === null) throw Error('Attempted to use changeEmail action before user was set in Redux store.');
      
      state.email = action.payload;
      return state;
    }
  }
});

export const { setUser, changeName, changeEmail } = userSlice.actions;
export default userSlice.reducer;
