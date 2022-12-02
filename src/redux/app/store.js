// import { configureStore } from "@reduxjs/toolkit"
import addedLeadIdReducer from "../features/addedLeadIdReducerSlice"
import deletedLeadIdReducer from "../features/deletedLeadIdReducerSlice"
import slectedLeadIdReducer from "../features/selectedLeadIdReducerSlice"
import selectedLeadReducer from "../features/selectedLeadReducerSlice"
import inputValueReducer from "../features/inputValueReducerSlice"
import submitPropertyReducer from "../features/submitPropertyReducerSlice"

// const store = configureStore({
//   reducer: {
//     addedLeadId: addedLeadIdReducer,
//     deletedLeadId: deletedLeadIdReducer,
//     selectedLead: selectedLeadReducer,
//     selectedLeadId: slectedLeadIdReducer,
//     inputValue: inputValueReducer,
//     submitProperty: submitPropertyReducer,
//   },
// })

// export default store

import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    addedLeadId: addedLeadIdReducer,
    deletedLeadId: deletedLeadIdReducer,
    selectedLead: selectedLeadReducer,
    selectedLeadId: slectedLeadIdReducer,
    inputValue: inputValueReducer,
    submitProperty: submitPropertyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

setupListeners(store.dispatch)

export default store
