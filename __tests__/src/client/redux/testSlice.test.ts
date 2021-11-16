import { createStore, combineReducers } from 'redux';

import counterReducer, { increment, decrement } from './../../../../src/client/redux/testSlice';

describe('Test sample slice', () => {
  test('How to create store and call dispatch', () => {
    const combinedReducer = combineReducers({
      counter: counterReducer,
    });
    const store = createStore(combinedReducer);

    expect(store.getState().counter).toBe(0);

    store.dispatch(increment());
    expect(store.getState().counter).toBe(1);

    store.dispatch(decrement());
    expect(store.getState().counter).toBe(0);
  });
});
