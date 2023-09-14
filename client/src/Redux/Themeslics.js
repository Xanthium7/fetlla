/* to manage ligth theme and dark theme */
import { createSlice } from "@reduxjs/toolkit";

const Themeslice = createSlice({
  name: "mode",
  initialState: {
    darkmode: true,
  },
  reducers: {
    Setmode(state, action) {
      state.darkmode = action.payload;
    },
  },
});

export const Themeaction = Themeslice.actions;
export default Themeslice;
