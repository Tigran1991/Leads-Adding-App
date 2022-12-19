import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: null,
}

export const selectedLeadIdSlice = createSlice({
  name: "selectedLeadId",
  initialState,
  reducers: {
    getSelectedLeadId: (state, action) => {
      state.id = action.payload
    },
  },
})

export const { getSelectedLeadId } = selectedLeadIdSlice.actions

export default selectedLeadIdSlice.reducer
