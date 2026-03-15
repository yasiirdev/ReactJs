import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import imageReducer from "./mainImageSlice";
import bagSliceReducer from "./bagSlice";
const Store = configureStore({
  reducer: {
    apiSlice: apiReducer,
    imageSlice: imageReducer,
    bagSlice: bagSliceReducer,
  },
});

export default Store;
