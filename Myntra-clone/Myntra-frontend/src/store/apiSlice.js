import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    items: [],
    fetching:true,
  },
  reducers: {
    setItems: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
  },
});

export const { setItems, setFetching } = apiSlice.actions;
export default apiSlice.reducer;
