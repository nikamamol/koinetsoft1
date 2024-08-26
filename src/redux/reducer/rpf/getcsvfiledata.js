import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../constant/ConstantApi";

// Utility to get the token from local storage
const getToken = () => localStorage.getItem('authToken');

// Thunk for fetching file data
export const fetchFileData = createAsyncThunk(
    "fileData/fetchFileData",
    async(_, { rejectWithValue }) => {
        try {
            const token = getToken();
            const response = await axios.get(`http://localhost:4000/user/csvFileData`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchFileDataAll = createAsyncThunk(
    "fileData/fetchFileDataAll",
    async(_, { rejectWithValue }) => {
        try {
            const token = getToken();
            const response = await axios.get(`${baseUrl}user/csvFileAllData`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Thunk for downloading a file
export const downloadFile = createAsyncThunk(
    "fileData/downloadFile",
    async({ fileId, filename }, { rejectWithValue }) => {
        try {
            const token = getToken();
            console.log('Downloading file with token:', token); // Debugging line
            const response = await axios.get(`${baseUrl}user/csvFileData/${fileId}`, {
                responseType: "blob",
                headers: {
                    Authorization: `Bearer ${token}`, // Ensure 'Bearer' is included
                },
            });


            // Create a download link and trigger download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return { fileId, filename };
        } catch (error) {
            console.error('Download file error:', error.response ? error.response.data : error.message); // Debugging line
            return rejectWithValue(error.message);
        }
    }
);


// Thunk for updating file status (Quality)
export const updateFileStatus = createAsyncThunk(
    "fileData/updateFileStatusQuality",
    async({ fileId, checked }, { getState, rejectWithValue }) => {
        try {
            const { files } = getState().fileData;
            const fileToUpdate = files.find(file => file.fileId === fileId);

            if (!fileToUpdate) {
                throw new Error('File not found');
            }

            const updatedStatus = fileToUpdate.status.map(status =>
                status.userType === 'Quality' ? {...status, checked } : status
            );

            const token = getToken();
            const response = await axios.put(`${baseUrl}user/updateStatus/${fileId}`, {
                status: updatedStatus
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// Thunk for updating file status (Email)
export const updateFileStatusEmail = createAsyncThunk(
    "fileData/updateFileStatusEmail",
    async({ fileId, statusId, checked }, { getState, rejectWithValue }) => {
        try {
            const { files } = getState().fileData;
            const fileToUpdate = files.find(file => file.fileId === fileId);

            if (!fileToUpdate) {
                throw new Error('File not found');
            }

            const updatedStatus = fileToUpdate.status.map(status =>
                status.userType === 'Email Marketing' ? {...status, checked } : status
            );

            const token = getToken();
            const response = await axios.put(`${baseUrl}user/updateStatus/${fileId}`, {
                status: updatedStatus
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// Thunk for deleting a file
// Thunk for deleting a file
export const deleteFile = createAsyncThunk(
    'fileData/deleteFile',
    async(fileId, { rejectWithValue }) => {
        try {
            const token = getToken();
            const response = await axios.delete(`${baseUrl}user/csvFileData/${fileId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Correctly formatted Authorization header
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);


const fileDataSlice = createSlice({
    name: "fileData",
    initialState: {
        files: [],
        status: "idle",
        error: null,
        statusData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFileData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFileData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.files = action.payload.files.map((file, index) => ({
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
                    status: file.status,
                }));

                state.statusData = action.payload.status; // Update statusData with fetched status
            })
            .addCase(fetchFileData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(downloadFile.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(updateFileStatus.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateFileStatus.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.files = state.files.map(file =>
                    file.fileId === action.payload.fileId ? {...file, status: action.payload.status } : file
                );
            })
            .addCase(updateFileStatus.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(updateFileStatusEmail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateFileStatusEmail.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.files = state.files.map(file =>
                    file.fileId === action.payload.fileId ? {...file, status: action.payload.status } : file
                );
            })
            .addCase(updateFileStatusEmail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(deleteFile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteFile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.files = state.files.filter(file => file._id !== action.meta.arg);
            })
            .addCase(deleteFile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            })
            .addCase(fetchFileDataAll.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFileDataAll.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.files = action.payload.files.map((file, index) => ({
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
                    status: file.status,
                }));
                state.statusData = action.payload.status;
            })
            .addCase(fetchFileDataAll.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

    },
});

export default fileDataSlice.reducer;