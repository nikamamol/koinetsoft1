import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../constant/ConstantApi';

// Async thunk to upload a file
export const emailCheckedUpload = createAsyncThunk(
    'emailCheckedFileUpload/emailCheckedUpload', // Corrected the name for consistency
    async(formData, thunkAPI) => {
        try {
            const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            };
            const response = await axios.post(`${baseUrl}user/uploadEMCheckedCsvFile`, formData, config);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response || error.message); // Added optional chaining for safety
        }
    }
);

export const fetchCsvFilesbyEMChecked = createAsyncThunk(
    "csvFileCheckedbyEMChecked/fetchCsvFilesbyEMChecked",
    async() => {
        const response = await axios.get(
            `${baseUrl}user/getCsvFilesByQualityCheckedAll`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.files;
    }
);


// Slice to handle upload states
const uploadEmailCheckedSlice = createSlice({
    name: 'emailCheckedFileUpload',
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
            .addCase(emailCheckedUpload.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(emailCheckedUpload.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(emailCheckedUpload.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            });
    },
});

export const { resetUploadState } = uploadEmailCheckedSlice.actions;
export default uploadEmailCheckedSlice.reducer;