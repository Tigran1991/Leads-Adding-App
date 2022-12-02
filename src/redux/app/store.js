import { configureStore } from "@reduxjs/toolkit"
import addedLeadIdReducer from "../features/addedLeadIdReducerSlice"
import deletedLeadIdReducer from "../features/deletedLeadIdReducerSlice"
import slectedLeadIdReducer from "../features/selectedLeadIdReducerSlice"
import selectedLeadReducer from "../features/selectedLeadReducerSlice"
import inputValueReducer from "../features/inputValueReducerSlice"
import submitPropertyReducer from "../features/submitPropertyReducerSlice"

const store = configureStore({
  reducer: {
    addedLeadId: addedLeadIdReducer,
    deletedLeadId: deletedLeadIdReducer,
    selectedLead: selectedLeadReducer,
    selectedLeadId: slectedLeadIdReducer,
    inputValue: inputValueReducer,
    submitProperty: submitPropertyReducer,
  },
})

export default store
