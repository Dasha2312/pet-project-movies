import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logOut } from "../../services/Auth/apiAuth";

export const logOutUser = createAsyncThunk('auth/logOutUser', async(_, thunkAPI) => {
  try {
    await logOut();
    return null; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  status: 'idle'
}

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    userLoading(state) {
      state.loading = true;
      state.error = null;
    },
    userLoaded(state, action) {
      state.currentUser = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    },
    useError(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logOutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.isAuthenticated = false;  // Обновляем статус аутентификации
        state.status = 'idle';
      })
      .addCase(logOutUser.pending, (state) => {
        state.status = 'loading';  // Обновляем статус на "выполняется"
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;  // Обрабатываем ошибку, если произошла
      });
  },
})

export const {userLoading, userLoaded, useError, logout} = authSlice.actions;

export default authSlice.reducer