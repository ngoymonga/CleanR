import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterMode } from "core/models/RegisterModel";
import { RegisterState } from "./state/RegisterState";
import { registerService } from "core/services/registerService";

const initialState: RegisterState = {
  user: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData: IRegisterMode, { rejectWithValue }) => {
    try {
      const response = await registerService(userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<IRegisterMode>) => {
          state.loading = false;
          state.user = action.payload;
        }
      )
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = registerSlice.actions;
export default registerSlice.reducer;
