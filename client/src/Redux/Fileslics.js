/* to store file information uploaded by the user */
import { createSlice } from "@reduxjs/toolkit";

const Fileslice = createSlice({
  name: "image",
  initialState: {
    fileurl: [],
  },
  reducers: {
    Setfile(state, action) {
      state.fileurl = action.payload;
    },
  },
});

export const Fileaction = Fileslice.actions;
export default Fileslice;
