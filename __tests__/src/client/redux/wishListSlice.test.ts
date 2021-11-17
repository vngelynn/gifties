import { createStore, combineReducers } from 'redux';
import { GiftItem } from '../../../../src/client/types';
import wishListReducer, { setWishList, addWish, updateWish, deleteWish } from './../../../../src/client/redux/wishListSlice';

describe('Test wishlist reducer and action creators', () => {
  let store;

  const wishList: GiftItem[] = [
    {
      id: 303,
      label: 'Chicken wings',
      description: 'uncooked',
      link: 'www.nocook.com',
    },
    {
      id: 301,
      label: 'Hammock',
      description: 'white and knitted',
      link: 'www.beachgear.com',
    }
  ];

  beforeEach(() => {
    const combinedReducer = combineReducers({
      wishList: wishListReducer,
    });

    store = createStore(combinedReducer);
  });

  test('Default wishlist state is an empty array', () => {
    expect(store.getState().wishList).toBeInstanceOf(Array);
    expect(store.getState().wishList).toHaveLength(0);
  });

  test('Test adding a gift to the wishlist state', () => {
    store.dispatch(setWishList(wishList));

    const newGift: GiftItem = {
      id: 302,
      label: 'Hot Wheels',
      description: 'red',
      link: 'www.cars.com',
    };

    store.dispatch(addWish(newGift));
    expect(store.getState().wishList).toHaveLength(wishList.length + 1);
    expect(store.getState().wishList).toEqual([...wishList, newGift]);
  });

  test('Test removing a gift to the wish list state', () => {
    store.dispatch(setWishList(wishList));

    store.dispatch(deleteWish(wishList[0]));
    expect(store.getState().wishList).toHaveLength(wishList.length - 1);
    expect(store.getState().wishList).toEqual(wishList.slice(1));

    // Trying to remove same item again should have no additional side effects
    store.dispatch(deleteWish(wishList[0]));
    expect(store.getState().wishList).toHaveLength(wishList.length - 1);
    expect(store.getState().wishList).toEqual(wishList.slice(1));
  });

  test('Test updating a gift to the wish list state', () => {
    store.dispatch(setWishList(wishList));

    const newGift: GiftItem = {
      ...wishList[0],
      label: 'updated label',
    };

    store.dispatch(updateWish(newGift));
    expect(store.getState().wishList).toHaveLength(wishList.length);
    expect(store.getState().wishList).toEqual([newGift, ...wishList.slice(1)]);
  });
});
