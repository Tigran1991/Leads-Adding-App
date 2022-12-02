import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: true,
}

export const listStateSlice = createSlice({
  name: "listState",
  initialState,
  reducers: {
    checkListState: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { checkListState } = listStateSlice.actions

export default listStateSlice.reducer
