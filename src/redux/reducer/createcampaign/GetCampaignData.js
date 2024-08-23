// Import necessary modules and schemas
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../../../constant/ConstantApi';

// Define initial state
const initialState = {
    campaigns: [],
    currentCampaign: null,
    status: 'idle',
    error: null,
};

// Create an async thunk for fetching all campaigns
export const fetchCampaigns = createAsyncThunk(
    'campaigns/fetchCampaigns',
    async() => {
        const response = await axios.get(`${baseUrl}user/getCampaignsData`);
        return response.data;
    }
);

// Create an async thunk for fetching campaign details by ID
export const fetchCampaignById = createAsyncThunk(
    'campaigns/fetchCampaignById',
    async(id) => {
        const response = await axios.get(`${baseUrl}/getCampaignsDataById/${id}`);
        return response.data;
    }
);

// Create a slice
const campaignsSlice = createSlice({
    name: 'campaigns',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampaigns.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCampaigns.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.campaigns = action.payload;
            })
            .addCase(fetchCampaigns.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchCampaignById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCampaignById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentCampaign = action.payload;
            })
            .addCase(fetchCampaignById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default campaignsSlice.reducer;