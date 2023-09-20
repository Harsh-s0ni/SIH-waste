import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api/API";

export const signin = createAsyncThunk("signin/signin", async (data) => {
  try {
    const response = await API.post('/login',data)
    return response.data;
  } catch (error) {
    console.error('an error occurred ', error);
  }
})
