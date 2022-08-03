import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserObject {
  user: {
    email?: string
  } | null,
}

const initialState: UserObject = {
  user: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{
      email?: string
    }>) => {
      state.user = action.payload || {};
    }
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;