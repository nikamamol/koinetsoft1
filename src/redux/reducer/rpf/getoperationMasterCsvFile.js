import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../constant/ConstantApi";

// Fetch token
const token = localStorage.getItem("authToken");

export const fetchCsvFilesbyOPMaster = createAsyncThunk(
    "csvFileCheckedbyOPMaster/fetchCsvFilesbyOPMaster",
    async(_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}user/getCsvFilesByOpMasterAll`, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : "", // Ensure token is added only if it exists
                    "Content-Type": "application/json",
                },
            });
            console.log("API response: ", response.data); // Log API response
            return response.data.files; // Adjust based on the actual structure of your API response
        } catch (error) {
            console.error("API Error:", error); // Log API errors
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

const CsvsliceByOPMaster = createSlice({
    name: "csvFileCheckedbyOPMaster",
    initialState: {
        csvFiles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCsvFilesbyOPMaster.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCsvFilesbyOPMaster.fulfilled, (state, action) => {
                state.loading = false;
                state.csvFiles = action.payload;
            })
            .addCase(fetchCsvFilesbyOPMaster.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});

export default CsvsliceByOPMaster.reducer;