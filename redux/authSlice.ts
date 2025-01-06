import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState } from "./state/AuthState";
import { loginService } from "core/services/authService";
import { ILoginModel } from "core/models/LoginModel";

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<string, ILoginModel, { rejectValue: string }>(
  "auth/loginUser",
  async (credentials: ILoginModel, { rejectWithValue }) => {
    try {
      const response = await loginService(credentials);
      return response.data.token;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoggedIn = true;
        state.token = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
