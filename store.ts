import { configureStore } from "@reduxjs/toolkit";
import navSlice from './src/features/slices/navSlice'
import userSlice from './src/features/slices/userSlice'


// ...

const store = configureStore({
  reducer: {
    nav: navSlice,
    user: userSlice
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store