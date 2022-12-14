import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  leadsData: [],
}

export const updatedLeadsDataSlice = createSlice({
  name: "updatedLeadsData",
  initialState,
  reducers: {
    updateLeadsData: (state, action) => {
      state.leadsData = action.payload
    },
  },
})

export const { updateLeadsData } = updatedLeadsDataSlice.actions

export default updatedLeadsDataSlice.reducer
