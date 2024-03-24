import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGallery = createAsyncThunk('gallery/fetchGallery', async () => {
    try {
        const response = await axios.get('http://localhost:5000/viewImages');
        return response.data;
    }
    catch (error) {
        throw error.response?.data?.error || 'An error occurred while trying to fetch Images';
    }
});

export const addGallery = createAsyncThunk('gallery/addGallery', async (imgUrl, { getState }) => {
    try {
        const { token } = getState().user.logged;
        const response = await axios.post('http://localhost:5000/addPhoto', imgUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
    }
    catch (error) {
        throw error.response?.data?.error || 'An error occurred while trying to add images';
    }
});

export const delGallery = createAsyncThunk('gallery/delGallery', async (imgId, { getState }) => {
    try {
        const { token } = getState().user.logged;
        const response = await axios.delete(`http://localhost:5000/deleteImages/${imgId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data
    }
    catch (error) {
        throw error.response?.data?.error || 'An error occurred while trying to delete images';
    }
});

const initialState = {
    galleries: [],
    error: null,
    status: 'idle'
}

const gallerySlice = createSlice({
    name: 'Gallery',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGallery.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGallery.fulfilled, (state, action) => {
                state.status = 'Succeeded';
                state.galleries = action.payload;
                state.error = null;
            })
            .addCase(fetchGallery.rejected, (state, action) => {
                state.status = 'Failed';
                state.galleries = [];
                state.error = action.error.message;
            })
            .addCase(addGallery.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addGallery.fulfilled, (state, action) => {
                state.status = 'Succeeded';
                state.galleries.push(action.payload);
                state.error = null
            })
            .addCase(addGallery.rejected, (state, action) => {
                state.status = 'Failed';
                state.galleries = [];
                state.error = action.error.message;
            })
            .addCase(delGallery.pending, (state) => {
                state.status = 'Loading';
            })
            .addCase(delGallery.fulfilled, (state, action) => {
                state.status = 'Succeeded';
                state.galleries = state.galleries.filter((img) => img._id !== action.payload);
                state.error = null;
            })
            .addCase(delGallery.rejected, (state, action) => {
                state.status = 'Failed';
                state.error = action.error.message;
            })
    }
});

export default gallerySlice.reducer;