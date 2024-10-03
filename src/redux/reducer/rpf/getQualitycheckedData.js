import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../constant/ConstantApi";

const token = localStorage.getItem("authToken");

// Async thunk for fetching CSV files
export const fetchCsvFilesbyQualityChecked = createAsyncThunk(
    "csvFileCheckedbyQualityChecked/fetchCsvFilesbyQualityChecked",
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

// CSV slice
const CsvsliceByQualityChecked = createSlice({
    name: "csvFileCheckedbyQualityChecked",
    initialState: {
        csvFiles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCsvFilesbyQualityChecked.pending, (state) => { // Change here
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCsvFilesbyQualityChecked.fulfilled, (state, action) => { // Change here
                state.loading = false;
                state.csvFiles = action.payload;
            })
            .addCase(fetchCsvFilesbyQualityChecked.rejected, (state, action) => { // Change here
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
// Export the reducer
export default CsvsliceByQualityChecked.reducer;