import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { apiSlice } from "./redux/app/api/apiSlice"
import { Provider } from "react-redux"
import store from "./redux/app/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
