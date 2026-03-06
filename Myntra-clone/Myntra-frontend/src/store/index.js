import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apiSlice";
import imageReducer from "./mainImageSlice";
const Store = configureStore({
  reducer: {
    apiSlice: apiReducer,
    imageSlice : imageReducer,
  },
});

export default Store;
