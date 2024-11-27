import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedTariff: null,
}

const tariffSlice = createSlice({
  name: 'tariff',
  initialState,
  reducers: {
    setSelectedTariff(state, action) {
      state.selectedTariff = action.payload
    }
  }
})

export const {setSelectedTariff} = tariffSlice.actions;
export  default tariffSlice.reducer