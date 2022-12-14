import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: "",
}

export const filterValueSlice = createSlice({
  name: "filterValue",
  initialState,
  reducers: {
    updateFilterValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateFilterValue } = filterValueSlice.actions

export default filterValueSlice.reducer
