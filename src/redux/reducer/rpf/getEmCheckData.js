import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../constant/ConstantApi";

const token = localStorage.getItem("authToken");

// Async thunk for fetching CSV files
export const fetchCsvFilesbyEMChecked = createAsyncThunk(
    "csvFileCheckedbyEMChecked/fetchCsvFilesbyEMChecked",
    async() => {
        const response = await axios.get(
            `${baseUrl}user/getCsvFilesByEMCheckedAll`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.files;
    }
);

// CSV slice
const CsvsliceByEMChecked = createSlice({
    name: "csvFileCheckedbyEMChecked",
    initialState: {
        csvFiles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCsvFilesbyEMChecked.pending, (state) => { // Reference the thunk correctly
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCsvFilesbyEMChecked.fulfilled, (state, action) => { // Reference the thunk correctly
                state.loading = false;
                state.csvFiles = action.payload;
            })
            .addCase(fetchCsvFilesbyEMChecked.rejected, (state, action) => { // Reference the thunk correctly
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the reducer
export default CsvsliceByEMChecked.reducer;