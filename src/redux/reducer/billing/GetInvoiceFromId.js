import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchInvoiceById = createAsyncThunk(
    'invoice/fetchInvoiceById',
    async(id) => {
        const response = await axios.get(`http://localhost:4000/user/getInvoiceById/${id}`);
        return response.data.data;
    }
);

const invoiceSlicebyid = createSlice({
    name: 'invoice',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInvoiceById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchInvoiceById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchInvoiceById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default invoiceSlicebyid.reducer;