import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/reduxState";

const initialState: AuthState = {
  authMode: "SIGN_UP",
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthMode(state, action: PayloadAction<"SIGN_UP" | "SIGN_IN">) {
      state.authMode = action.payload;
    },
  },
});

export const authActions = { ...auth.actions };

export default auth;
