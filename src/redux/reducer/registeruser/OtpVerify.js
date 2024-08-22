import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for verifying OTP
export const verifyOtp = createAsyncThunk(
    'otp/verifyOtp',
    async(otp, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:4000/user/verify-otp", { otp });
            const { token, username } = response.data;

            // Store both token and username in local storage
            localStorage.setItem('authToken', token);
            localStorage.setItem('username', username);

            console.log(token); // This should print the token to the console
            console.log(username); // This should print the username to the console

            return { token, username }; // Return both token and username if needed
        } catch (error) {
            return rejectWithValue(error.response || "Error verifying OTP");
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