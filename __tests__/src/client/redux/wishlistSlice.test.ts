import { createStore, combineReducers } from 'redux';
import { WishGiftItem } from './../../../../src/client/types';
import wishlistReducer, { setWishList, addWish, updateWish, deleteWish } from './../../../../src/client/redux/wishlistSlice';

describe('Test wishlist reducer and action creators', () => {
  let store;

  const wishlist:  WishGiftItem[] = [
    {
        id: 303,
        label: 'Chicken wings',
        description: 'uncooked',
        link: 'www.nocook.com',
        status: 'available',
    },
    {
        id: 301,
        label: 'Hammock',
        description: 'white and knitted',
        link: 'www.beachgear.com',
        status: 'available',
    }
  ];

  beforeEach(() => {
    const combinedReducer = combineReducers({
        wishlist: wishlistReducer,
    });

    store = createStore(combinedReducer);
  });

  test('Default wishlist state is an empty array', () => {
    expect(store.getState().wishlist).toBeInstanceOf(Array);
    expect(store.getState().wishlist).toHaveLength(0);
  });

  test('Test adding a gift to the wishlist state', () => {
    store.dispatch(setWishList(wishlist));

    const newGift: WishGiftItem  = {
        id: 302,
        label: 'Hot Wheels',
        description: 'red',
        link: 'www.cars.com',
        status: 'available'
    };

    store.dispatch(addWish(newGift));
    expect(store.getState().wishlist).toHaveLength(wishlist.length + 1);
    expect(store.getState().wishlist).toEqual([...wishlist, newGift]);
  });

  test('Test removing a gift to the wish list state', () => {
    store.dispatch(setWishList(wishlist));

    console.log(wishlist);

    store.dispatch(deleteWish(wishlist[0]));
    expect(store.getState().wishlist).toHaveLength(wishlist.length - 1);
    expect(store.getState().wishlist).toEqual(wishlist.slice(1));

    // Trying to remove same item again should have no additional side effects
    store.dispatch(deleteWish(wishlist[0]));
    expect(store.getState().wishlist).toHaveLength(wishlist.length - 1);
    expect(store.getState().wishlist).toEqual(wishlist.slice(1));
  });

  test('Test updating a gift to the wish list state', () => {
    store.dispatch(setWishList(wishlist));

    const newGift: WishGiftItem = {
      ...wishlist[0],
      label: 'updated label',
      status: 'purchased'
    };

    store.dispatch(updateWish(newGift));
    expect(store.getState().wishlist).toHaveLength(wishlist.length);
    expect(store.getState().wishlist).toEqual([newGift, ...wishlist.slice(1)]);
  });

});
