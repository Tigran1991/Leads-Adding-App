import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterState: "All",
}

export const filterSelectedStateSlice = createSlice({
  name: "filterSelectedState",
  initialState,
  reducers: {
    checkFilterState: (state, action) => {
      state.filterState = action.payload === "off" ? "All" : "Selected"
    },
  },
})

export const { checkFilterState } = filterSelectedStateSlice.actions

export default filterSelectedStateSlice.reducer
