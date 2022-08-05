import { createAction, createSlice } from '@reduxjs/toolkit';

interface LoaderObj {
  isLoading: boolean;
}

const initialState: LoaderObj = {
  isLoading: false
}

export const ExtraReducers = createAction("extraReducers")

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.isLoading = true;
    },
    hideLoader: (state) => {
      state.isLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ExtraReducers, () => {
      console.log("test extra reducer in loader");
    })
  }
})

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;