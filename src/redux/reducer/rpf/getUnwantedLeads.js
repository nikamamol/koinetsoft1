import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../constant/ConstantApi";

const token = localStorage.getItem("authToken");

// Async thunk for fetching CSV files
export const fetchCsvFilesbyUnwantedLeads = createAsyncThunk(
    "csvFileCheckedbyUnwantedLeads/fetchCsvFilesbyUnwantedLeads",
    async() => {
        const response = await axios.get(
            `${baseUrl}user/getCsvFilesByUnwantedLeadsAll`, {
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
const CsvsliceByUnwantedLeads = createSlice({
    name: "csvFileCheckedbyUnwantedLeads",
    initialState: {
        csvFiles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCsvFilesbyUnwantedLeads.pending, (state) => { // Reference the thunk correctly
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCsvFilesbyUnwantedLeads.fulfilled, (state, action) => { // Reference the thunk correctly
                state.loading = false;
                state.csvFiles = action.payload;
            })
            .addCase(fetchCsvFilesbyUnwantedLeads.rejected, (state, action) => { // Reference the thunk correctly
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the reducer
export default CsvsliceByUnwantedLeads.reducer;