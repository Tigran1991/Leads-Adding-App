import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  property: false,
}

export const submitProertySlice = createSlice({
  name: "submitProperty",
  initialState,
  reducers: {
    setSubmitProperty: (state, action) => {
      state.property = action.payload
    },
  },
})

export const { setSubmitProperty } = submitProertySlice.actions

export default submitProertySlice.reducer
