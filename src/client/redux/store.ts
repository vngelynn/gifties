import { configureStore, createSlice} from '@reduxjs/toolkit';

export default function store() {
  configureStore({
    reducer: {},
  });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// import all reducers
// combinereducer
