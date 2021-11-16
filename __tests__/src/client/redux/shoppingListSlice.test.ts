import { createStore, combineReducers } from 'redux';

import { ShoppingGiftItem } from './../../../../src/client/types';
import shoppingListReducer, { setShoppingList, addGift, updateGift, deleteGift } from './../../../../src/client/redux/shoppingListSlice';

describe('Test shopping list reducer and action creators', () => {
  let store;

  const shoppingList: ShoppingGiftItem[] = [
    {
      id: 0,
      label: 'test1',
      status: 'available'
    },
    {
      id: 1,
      label: 'test2',
      status: 'purchased'
    }
  ];

  beforeEach(() => {
    const combinedReducer = combineReducers({
      shoppingList: shoppingListReducer,
    });
    store = createStore(combinedReducer);
  });

  test('Default shopping list state is an empty array', () => {
    expect(store.getState().shoppingList).toBeInstanceOf(Array);
    expect(store.getState().shoppingList).toHaveLength(0);
  });

  test('Test setting shopping list state', () => {
    store.dispatch(setShoppingList(shoppingList));
    expect(store.getState().shoppingList).toHaveLength(shoppingList.length);
    expect(store.getState().shoppingList).toEqual(shoppingList);
  });

  test('Test adding a gift to the shopping list state', () => {
    store.dispatch(setShoppingList(shoppingList));

    const newGift: ShoppingGiftItem = {
      id: 2,
      label: 'test2',
      status: 'purchased'
    };

    store.dispatch(addGift(newGift));
    expect(store.getState().shoppingList).toHaveLength(shoppingList.length + 1);
    expect(store.getState().shoppingList).toEqual([...shoppingList, newGift]);
  });

  test('Test removing a gift from the shopping list state', () => {
    store.dispatch(setShoppingList(shoppingList));

    store.dispatch(deleteGift(shoppingList[0]));
    expect(store.getState().shoppingList).toHaveLength(shoppingList.length - 1);
    expect(store.getState().shoppingList).toEqual(shoppingList.slice(1));

    // Trying to remove same item again should have no additional side effects
    store.dispatch(deleteGift(shoppingList[0]));
    expect(store.getState().shoppingList).toHaveLength(shoppingList.length - 1);
    expect(store.getState().shoppingList).toEqual(shoppingList.slice(1));
  });

  test('Test updating a gift to the shopping list state', () => {
    store.dispatch(setShoppingList(shoppingList));

    const newGift: ShoppingGiftItem = {
      ...shoppingList[0],
      label: 'updated label',
      status: 'purchased'
    };

    store.dispatch(updateGift(newGift));
    expect(store.getState().shoppingList).toHaveLength(shoppingList.length);
    expect(store.getState().shoppingList).toEqual([newGift, ...shoppingList.slice(1)]);
  });
});
