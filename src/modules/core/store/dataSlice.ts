import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  dataError: false
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData(state, action) {
      const { payload } = action;
      state.userData = payload;
    },

    setDataError(state, action) {
      const { payload } = action;
      state.dataError = payload;
    }
  }
});

export const dataActions = dataSlice.actions;
export default dataSlice;
