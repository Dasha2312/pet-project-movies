import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0,
}

const watchLaterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setWatchLaterList(state, action) {
      state.count = action.payload.length
    },
    incrementCounter(state) {
      state.count += 1;
    },
    decrementCounter(state) {
      state.count -= 1;
    }
  },
})

export const {decrementCounter, incrementCounter, setWatchLaterList } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;