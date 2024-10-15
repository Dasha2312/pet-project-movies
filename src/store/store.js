import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth/authSlice';
import mobileReducer from './mobileSlice';
import countWatchLaterReducer from './watchLaterSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mobile: mobileReducer,
    countWatchLater: countWatchLaterReducer,
  }
})