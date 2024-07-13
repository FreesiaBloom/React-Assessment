import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  postData: [],
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

    setPostData(state, action) {
      const { payload } = action;
      state.postData = payload;
    },

    setDataError(state, action) {
      const { errorFlag } = action;
      state.dataError = errorFlag;
    }
  }
});

export const dataActions = dataSlice.actions;
export default dataSlice;
