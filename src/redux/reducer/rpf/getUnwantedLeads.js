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
// Add field for rejected leads in the initialState
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
            .addCase(fetchCsvFilesbyUnwantedLeads.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCsvFilesbyUnwantedLeads.fulfilled, (state, action) => {
                state.loading = false;
                state.csvFiles = action.payload;

                // Calculate total rejected leads based on file content
                let rejectedLeadsCount = 0;
                action.payload.forEach((file) => {
                    // Assuming that the file.content includes rejected leads info
                    if (file.rejectedLeads && file.rejectedLeads.length > 0) {
                        rejectedLeadsCount += file.rejectedLeads.length; // Adjust as per your file structure
                    }
                });

                state.totalRejectedLeads = rejectedLeadsCount; // Update the total rejected leads
            })
            .addCase(fetchCsvFilesbyUnwantedLeads.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Export the reducer
export default CsvsliceByUnwantedLeads.reducer;