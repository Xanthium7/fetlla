import { createSlice } from "@reduxjs/toolkit";

const Authslice = createSlice({
  name: "Auth",
  initialState: {
    Adminisloggedin: false,
    token : null
  },
  reducers: {
    Setlogin(state, action) {
      state.token = action.payload;
      state.Adminisloggedin = true;
    },
    Setlogout(state, action) {
      state.token = null;
      state.Adminisloggedin = false;
    },
   
  },
});

export const Authaction = Authslice.actions;
export default Authslice;
