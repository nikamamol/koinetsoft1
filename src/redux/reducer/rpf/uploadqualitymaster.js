import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../constant/ConstantApi';

// Async thunk to upload a file
export const uploadqualitymaster = createAsyncThunk(
    'qualitymasterfileUpload/uploadqualitymaster',
    async(formData, thunkAPI) => {
        try {
            const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    "authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.post(`${baseUrl}user/uploadQualityMasterCsvFile`, formData, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
);

// Slice to handle upload states
const qualitymasterFileUploadSlice = createSlice({
    name: 'qualitymasterfileUpload',
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetUploadState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadqualitymaster.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(uploadqualitymaster.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(uploadqualitymaster.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            });
    },
});

// Export the actions and reducer
export const { resetUploadState } = qualitymasterFileUploadSlice.actions;
export default qualitymasterFileUploadSlice.reducer;