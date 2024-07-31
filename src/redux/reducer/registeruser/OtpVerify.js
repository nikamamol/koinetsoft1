import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for verifying OTP
export const verifyOtp = createAsyncThunk(
  'otp/verifyOtp',
  async (otp, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://koinetsoft-backend.onrender.com/user/verify-otp", { otp });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      return token;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error verifying OTP");
    }
  }
);

// Slice for OTP
const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    otp: '',
    error: '',
    loading: false,
  },
  reducers: {
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.error = '';
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setOtp } = otpSlice.actions;
export default otpSlice.reducer;
