import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../server";
import { ExtraReducers } from "./loaderReducer";
interface User {
  emailId: string,
  password: string
}

interface LoginResponse {
  message: string | null,
  data: object | null
}
interface UserObject {
  user: Object | null,
  isLoading: boolean,
  errorMessage: string | null
}

const initialState: UserObject = {
  user: null,
  isLoading: false,
  errorMessage: null
}

export const loginUserWith = createAsyncThunk<LoginResponse, User>("auth/loginUserToFirebase", async (user) => {
  const { emailId, password } = user;
  try {
    const result = await loginUser(emailId, password);

    return {
      data: JSON.parse(JSON.stringify(result?.user)) || null,
      message: null
    }
  } catch (error: any) {
    return {
      data: null,
      message: error.userInfo.message,
    }
  }
})

export const registerUserWith = createAsyncThunk<LoginResponse, User>("auth/registerUserToFirebase", async (user) => {
  const { emailId, password } = user;
  try {
    const result = await registerUser(emailId, password);
    return {
      data: JSON.parse(JSON.stringify(result?.user)),
      message: null
    }
  } catch (error: any) {
    return {
      data: null,
      message: error?.userInfo?.message
    }
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{
      email?: string
    }>) => {
      state.user = action.payload || {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ExtraReducers, () => {
      console.log("test extra reducer in auth");
    })

    builder.addCase(loginUserWith.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    })

    builder.addCase(loginUserWith.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.data || null;
      state.errorMessage = action.payload?.message || null;
    })
    builder.addCase(loginUserWith.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.message;
    })

    builder.addCase(registerUserWith.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    })
    builder.addCase(registerUserWith.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = "Successfully registered";
      state.errorMessage = action.payload?.message || null;
    })
    builder.addCase(registerUserWith.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    })
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
