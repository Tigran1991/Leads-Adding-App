// import { configureStore } from "@reduxjs/toolkit"
import addedLeadIdReducer from "../features/addedLeadIdReducerSlice"
import deletedLeadIdReducer from "../features/deletedLeadIdReducerSlice"
import slectedLeadIdReducer from "../features/selectedLeadIdReducerSlice"
import selectedLeadReducer from "../features/selectedLeadReducerSlice"
import submitPropertyReducer from "../features/submitPropertyReducerSlice"
import clearButtonStateReducer from "../features/clearButtonStateReducerSlice"

import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import leadsListStateReducer from "../features/leadsListStateReducerSlice"
import filterSelectedStateSlice from "../features/filterStateReducerSlice"
import filterValueReducer from "../features/filterValueReducerSlice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    addedLeadId: addedLeadIdReducer,
    deletedLeadId: deletedLeadIdReducer,
    selectedLead: selectedLeadReducer,
    selectedLeadId: slectedLeadIdReducer,
    leadsListState: leadsListStateReducer,
    submitProperty: submitPropertyReducer,
    clearButtonState: clearButtonStateReducer,
    filterValue: filterValueReducer,
    filterSelectedState: filterSelectedStateSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

setupListeners(store.dispatch)

export default store
