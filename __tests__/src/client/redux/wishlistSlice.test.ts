import { createStore, combineReducers } from 'redux';

import wishlistReducer, { setWishList, addWish, updateWish, deleteWish } from './../../../../src/client/redux/wishlistSlice';

describe('Test wishlist reducer and action creators', () => {
  let store;

  const giftItem = {
    id: 303,
    label: 'Chicken wings',
    description: 'uncooked',
    link: 'www.nocook.com',
    status: 'available',
  };
  

  beforeEach(() => {
    const combinedReducer = combineReducers({
        wishlist: wishlistReducer,
    });

    store = createStore(combinedReducer);
  });

  test('Test setting wishlist state', () => {
    store.dispatch(setWishList(giftItem));
    expect(store.getState().wishlist).toEqual(giftItem);
  });

  test('Adds a new wish to wishlist', () => {
    const length = store.getState().wishlist.length;

    const giftItem = {
        id: 302,
        label: 'Hot Wheels',
        description: 'red',
        link: 'www.cars.com',
        status: 'available',
    };
    store.dispatch(addWish(giftItem));
    expect(store.getState().wishlist.length).toEqual(length+1);
  });

  test('Deletes a book from list with id', () => {
    store.dispatch(deleteWish);
  });

});