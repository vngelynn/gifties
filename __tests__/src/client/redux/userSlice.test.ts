import { createStore, combineReducers } from 'redux';

import userReducer, { setUser, changeName, changeEmail } from './../../../../src/client/redux/userSlice';

describe('Test user reducer and action creators', () => {
  let store;

  const user = {
    userId: 202,
    name: 'Michael',
    email: 'michael@dundermifflin.com',
    profileImage: 'www.featherlessbird.com',
  };

  beforeEach(() => {
    const combinedReducer = combineReducers({
      user: userReducer,
    });
    store = createStore(combinedReducer);
  });

  test('Default user state is null', () => {
    expect(store.getState().user).toBeNull();
  });
  
  test('Test setting user state', () => {
    store.dispatch(setUser(user));
    expect(store.getState().user).toEqual(user);
  });

  test('Change user name', () => {
    const newName = 'bob';
    store.dispatch(setUser(user));
    
    store.dispatch(changeName(newName));
    expect(store.getState().user).toEqual({...user, name: newName});
  });

  test('Change user email', () => {
    const newEmail = 'bob@dundermifflin.com';
    store.dispatch(setUser(user));
    
    store.dispatch(changeEmail(newEmail));
    expect(store.getState().user).toEqual({...user, email: newEmail});
  });
});
