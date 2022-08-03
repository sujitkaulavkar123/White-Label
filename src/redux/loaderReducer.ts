import { createSlice } from '@reduxjs/toolkit';

interface LoaderObj {
  isLoading: boolean;
}

const initialState: LoaderObj = {
  isLoading: false
}

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
  }
})

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;