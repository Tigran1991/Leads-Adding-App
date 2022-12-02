import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: null,
}

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    getInputValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { getInputValue } = inputValueSlice.actions

export default inputValueSlice.reducer
