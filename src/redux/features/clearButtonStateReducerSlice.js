import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  buttonState: false,
}

export const clearButtonStateSlice = createSlice({
  name: "clearButtonState",
  initialState,
  reducers: {
    checkClearButtonState: (state, action) => {
      state.buttonState = action.payload
    },
  },
})

export const { checkClearButtonState } = clearButtonStateSlice.actions

export default clearButtonStateSlice.reducer
