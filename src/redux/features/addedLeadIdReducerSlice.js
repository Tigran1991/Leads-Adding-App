import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: null,
}

export const addedLeadIdSlice = createSlice({
  name: "addedLeadId",
  initialState,
  reducers: {
    getAddedLeadId: (state, action) => {
      state.id = action.payload
    },
  },
})

export const { getAddedLeadId } = addedLeadIdSlice.actions

export default addedLeadIdSlice.reducer
