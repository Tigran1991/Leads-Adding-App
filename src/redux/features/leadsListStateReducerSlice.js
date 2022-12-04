import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  listState: true,
}

export const leadsListStateSlice = createSlice({
  name: "addedLeadId",
  initialState,
  reducers: {
    checkLeadListState: (state, action) => {
      state.listState = action.payload
    },
  },
})

export const { checkLeadListState } = leadsListStateSlice.actions

export default leadsListStateSlice.reducer
