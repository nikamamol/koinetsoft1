import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for fetching file and status data
export const fetchFileData = createAsyncThunk(
    "fileData/fetchFileData",
    async() => {
        const response = await axios.get("http://localhost:4000/user/csvFileData");
        return {
            files: response.data.files,
            status: response.data.status, // Adjust according to your API response structure
        };
    }
);

// Thunk for downloading a file
export const downloadFile = createAsyncThunk(
    "fileData/downloadFile",
    async({ fileId, filename }, { rejectWithValue }) => {
        try {
            const response = await axios({
                url: `http://localhost:4000/user/csvFileData/${fileId}`,
                method: "GET",
                responseType: "blob",
            });

            // Create a download link and trigger download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return { fileId, filename }; // Optional: return data if needed
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const fileDataSlice = createSlice({
    name: "fileData",
    initialState: {
        files: [],
        status: "idle",
        error: null,
        statusData: [], // Add statusData to the initial state
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFileData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFileData.fulfilled, (state, action) => {
                state.status = "succeeded";
                const today = new Date().toISOString().split("T")[0];
                state.files = action.payload.files
                    .filter((file) => file.createdAt.startsWith(today))
                    .map((file, index) => ({
                        serialNumber: index + 1,
                        filename: file.originalname,
                        campaignName: file.campaignName,
                        campaignCode: file.campaignCode,
                        createdAt: new Date(file.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        }),
                        fileId: file._id,
                        status: file.status, // Include the status array in each file object
                    }));

                state.statusData = action.payload.status; // Update statusData with fetched status
            })
            .addCase(fetchFileData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(downloadFile.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export default fileDataSlice.reducer;