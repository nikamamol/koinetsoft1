import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../constant/ConstantApi";

// Async thunk for verifying OTP
export const verifyOtp = createAsyncThunk(
    "otp/verifyOtp",
    async (otp, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${baseUrl}user/verify-otp`, { otp }
            );
            const { token, username, role } = response.data;

            // Store both token and username in local storage
            localStorage.setItem("authToken", token);
            localStorage.setItem("username", username);
            localStorage.setItem("role", role);

            return { token, username, role }; // Return both token and username if needed
        } catch (error) {
            // If the OTP does not match, customize the error message
            if (error.response && error.response.status === 400) {
                return rejectWithValue("OTP does not match. Please try again.");
            }
            return rejectWithValue("Error verifying OTP");
        }
    }
);

// Slice for OTP
const otpSlice = createSlice({
    name: "otp",
    initialState: {
        otp: "",
        error: "",
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
                state.error = "";
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Set error message
            });
    },
});

export const { setOtp } = otpSlice.actions;
export default otpSlice.reducer;
