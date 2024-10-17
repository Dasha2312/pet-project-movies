import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllWatchLater } from "../services/Movies/apiAddToWatch"

export const fetchWatchLaterMovies = createAsyncThunk('watchLater/fetchWatchLaterMovies', async() => {
  const data = await getAllWatchLater();

  return data;
})

const initialState = {
  count: 0,
  loading: false,
  error: null,
}

const watchLaterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    incrementCounter(state) {
      state.count += 1;
    },
    decrementCounter(state) {
      state.count -= 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchLaterMovies.pending, (state) => {
        state.loading = true,
        state.error = null
      })
      .addCase(fetchWatchLaterMovies.fulfilled, (state, action) => {
        state.loading = false,
        state.count = action.payload.length
      })
      .addCase(fetchWatchLaterMovies.rejected, (state, action) => {
        state.loading = false,
        state.error = action.error.message
      })
  }
})

export const {decrementCounter, incrementCounter } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;