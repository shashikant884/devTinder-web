import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnection: (state, action) => action.payload,
    removeConnction: () => null,
  },
});

export const { addConnection, removeConnction } = connectionSlice.actions;
export default connectionSlice.reducer;
