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

//   test('Adds a new wish to wishlist', () => {

//   });

});