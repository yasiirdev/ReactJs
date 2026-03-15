import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagSlice",
  initialState: [],
  reducers: {
    setBagItems: (state, action) => {
      state.push(action.payload);
    },
    removeSetBagItems: (state, action) => {
      return state.filter((item) =>  item !== action.payload);
    },
  },
});

export default bagSlice.reducer;
export const { setBagItems, removeSetBagItems } = bagSlice.actions;
