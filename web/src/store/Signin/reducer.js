import { createSlice } from "@reduxjs/toolkit";
import { signin } from "./thunk";
export const initialState = {
  user: {},
  error: "", // for error message
  loading: false,
};

const Signin = createSlice({
  name: "signin",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload.data;
      state.loading = true;
      state.error = true;
    },
    loginSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    },
    loading(state) {
      state.loading = true;
    }
  },
  extraReducers: (builder)=> {
    builder.addCase(signin.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload?.data;
      state.loading = false;
    });
    builder.addCase(signin.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false;
    })
  }
});

export const {
  apiError,
  loginSuccess,
  loading
} = Signin.actions

export default Signin.reducer;