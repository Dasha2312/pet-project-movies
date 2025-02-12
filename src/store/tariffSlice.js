import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedTariff: null,
}

const tariffSlice = createSlice({
  name: 'tariff',
  initialState,
  reducers: {
    setSelectedTariff(state, action) {
      console.log('payload', action.payload)
      state.selectedTariff = action.payload
    },
    resetTariff(state) {
      state.selectedTariff = null
    }
  }
})

export const {setSelectedTariff, resetTariff} = tariffSlice.actions;
export  default tariffSlice.reducer