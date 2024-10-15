import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false
}

const mobileSlice = createSlice ({
  name: "mobile",
  initialState,
  reducers: {
    mobileState(state) {
      if(window.innerWidth <= 767) {
        state.isMobile = true
      } else {
        state.isMobile = false
      }
    }
  }
}) 

export const {mobileState} = mobileSlice.actions;

export default mobileSlice.reducer;