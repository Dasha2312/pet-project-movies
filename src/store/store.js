import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from './mobileSlice';
import countWatchLaterReducer from './watchLaterSlice'
import tariffReducer from './tariffSlice'

export const store = configureStore({
  reducer: {
    mobile: mobileReducer,
    countWatchLater: countWatchLaterReducer,
    tariff: tariffReducer
  }
})