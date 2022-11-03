import { configureStore } from "@reduxjs/toolkit";
import PostFromTrueFalseReducer from "../HomeMain/PostContainer/ActionSlice";
import TotalMovieSliceReducer from "../watch/services/TotalMovieSlice";
import { ApiSlice } from "../Api/ApiSlice";
import { BaseApi } from "../watch/services/BeseApi";
export const store = configureStore({
 reducer:{
   [ApiSlice.reducerPath]: ApiSlice.reducer,
   [BaseApi.reducerPath]: BaseApi.reducer,
    PostTrueFalse:PostFromTrueFalseReducer,
    TotalMovie:TotalMovieSliceReducer,

 },
 middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(ApiSlice.middleware),
    devTools: true
})
