import { createSlice } from "@reduxjs/toolkit"
import { formInitialState } from "../../utils"

const initialState = {
  lead: formInitialState,
}

export const selectedLeadSlice = createSlice({
  name: "selectedLead",
  initialState,
  reducers: {
    getSelectedLead: (state, action) => {
      state.lead = action.payload
    },
  },
})

export const { getSelectedLead } = selectedLeadSlice.actions

export default selectedLeadSlice.reducer
