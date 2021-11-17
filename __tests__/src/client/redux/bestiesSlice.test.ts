import { createStore, combineReducers } from 'redux';

import { Bestie } from '../../../../src/client/types';
import bestiesReducer, { setBesties, addBestie, deleteBestie } from '../../../../src/client/redux/bestiesSlice';

describe('Test shopping list reducer and action creators', () => {
  let store;

  const besties: Bestie[] = [
    {
      id: 0,
      name: 'Adam'
    },
    {
      id: 1,
      name: 'Angelynn'
    },
    {
      id: 2,
      name: 'Jackie'
    }
  ];

  beforeEach(() => {
    const combinedReducer = combineReducers({
      besties: bestiesReducer,
    });
    store = createStore(combinedReducer);
  });

  test('Default besties state is an empty array', () => {
    expect(store.getState().besties).toBeInstanceOf(Array);
    expect(store.getState().besties).toHaveLength(0);
  });

  test('Test setting besties state', () => {
    store.dispatch(setBesties(besties));
    expect(store.getState().besties).toHaveLength(besties.length);
    expect(store.getState().besties).toEqual(besties);
  });

  test('Test adding a bestie to the besties state', () => {
    store.dispatch(setBesties(besties));

    const newBestie: Bestie = {
      id: 3,
      name: 'Miguel'
    };

    store.dispatch(addBestie(newBestie));
    expect(store.getState().besties).toHaveLength(besties.length + 1);
    expect(store.getState().besties).toEqual([...besties, newBestie]);
  });

  test('Test removing a bestie from the shopping list state', () => {
    store.dispatch(setBesties(besties));


    store.dispatch(deleteBestie(besties[0]));
    expect(store.getState().besties).toHaveLength(besties.length - 1);
    expect(store.getState().besties).toEqual(besties.slice(1));

    // Trying to remove same item again should have no additional side effects
    store.dispatch(deleteBestie(besties[0]));
    expect(store.getState().besties).toHaveLength(besties.length - 1);
    expect(store.getState().besties).toEqual(besties.slice(1));
  });
});
