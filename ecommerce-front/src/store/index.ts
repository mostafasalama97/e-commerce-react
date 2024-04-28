// in this file it will contain the final configuration for store where i will collect the reducesrs[categorize - products]

import { configureStore } from '@reduxjs/toolkit'
import categoriesSllice from './catogries/categoriesSllice'
import productsSlice from './products/productsSlice'

export const store = configureStore({
  reducer: {categoriesSllice , productsSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store