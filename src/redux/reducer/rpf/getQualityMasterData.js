import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../constant/ConstantApi";

const token = localStorage.getItem("authToken");

export const fetchCsvFilesbyQualityMaster = createAsyncThunk(
    "csvFileCheckedbyQualityMaster/fetchCsvFilesbyQualityMaster",
    async() => {
        const response = await axios.get(
            `${baseUrl}user/qualityMasterCsvFile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response.data.files);
        return response.data.files;
    }
);

const CsvsliceByQualityMaster = createSlice({
    name: "csvFileCheckedbyQualityMaster",
    initialState: {
        csvFiles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCsvFilesbyQualityMaster.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCsvFilesbyQualityMaster.fulfilled, (state, action) => {
                state.loading = false;
                state.csvFiles = action.payload;
            })
            .addCase(fetchCsvFilesbyQualityMaster.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default CsvsliceByQualityMaster.reducer;