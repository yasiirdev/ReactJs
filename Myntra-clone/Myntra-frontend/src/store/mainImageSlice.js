import { createSlice } from "@reduxjs/toolkit";

const ImageSlice = createSlice({
    name: "imageSlice",
    initialState: [],
    reducers :{
        setfetchImage: (state, action) => {
        state.push(action.payload);    
    } 
    }
});

export const { setfetchImage } = ImageSlice.actions;
export default ImageSlice.reducer; 