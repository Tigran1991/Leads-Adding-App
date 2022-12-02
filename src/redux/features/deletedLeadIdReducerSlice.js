import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: null,
}

export const deletedLeadIdSlice = createSlice({
  name: "deletedLeadId",
  initialState,
  reducers: {
    getDeletedLeadId: (state, action) => {
      state.id = action.payload
    },
  },
})

export const { getDeletedLeadId } = deletedLeadIdSlice.actions

export default deletedLeadIdSlice.reducer
