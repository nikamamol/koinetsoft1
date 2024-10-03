import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../constant/ConstantApi";

const token = localStorage.getItem("authToken");

// Async thunk for fetching CSV files
export const fetchCsvFilesbyEMMaster = createAsyncThunk(
    "csvFileCheckedbyEMMaster/fetchCsvFilesbyEMMaster",
    async() => {
        const response = await axios.get(
            `${baseUrl}user/getCsvFilesByEMMasterAll`, {
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
const CsvsliceByEMMaster = createSlice({
    name: "csvFileCheckedbyEMMaster",
    initialState: {
        csvFiles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCsvFilesbyEMMaster.pending, (state) => { // Reference the thunk correctly
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCsvFilesbyEMMaster.fulfilled, (state, action) => { // Reference the thunk correctly
                state.loading = false;
                state.csvFiles = action.payload;
            })
            .addCase(fetchCsvFilesbyEMMaster.rejected, (state, action) => { // Reference the thunk correctly
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the reducer
export default CsvsliceByEMMaster.reducer;