import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from './api/baseApi'; // Adjust the import path as necessary



export const store=configureStore({

reducer:{
   [baseApi.reducerPath]:baseApi.reducer,
   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().contact(baseApi.middleware)
},


});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


