import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a thunk action to fetch messages
export const fetchMessages = createAsyncThunk('message/fetchMessage', async (_, { getState }) => {
    try {
        const { token } = getState().user.logged;
        const response = await axios.get('http://localhost:5000/getMessages', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } 
    catch (error) {
        throw error.response?.data?.error || 'An error occurred while trying to fetch message';
    }
});

export const postMessage = createAsyncThunk('messages/postMessage', async (messageData) => {
    try {
        const response = await axios.post('http://localhost:5000/messages/', messageData);
        return response.data;
    }
    catch (error) {
        throw error.response?.data?.error || 'An error occurred while trying to post message';
    }
});

const initialState = {
    messages: [],
    error: null,
    status: 'Idle'
}

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMessages.pending, (state) => {
            state.status = 'Loading...'
        })
        .addCase(fetchMessages.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.messages = action.payload;
            state.error = null;
        })
        .addCase(fetchMessages.rejected, (state, action) => {
            state.status = 'Failed';
            state.messages = [];
            state.error = action.error.message;
        })
        .addCase(postMessage.pending, (state) => {
            state.status = 'Loading...'
        })
        .addCase(postMessage.fulfilled, (state, action) => {
            state.status = 'Succeeded';
            state.messages.push(action.payload);
            state.error = null;
        })
        .addCase(postMessage.rejected, (state, action) => {
            state.status = 'Failed';
            state.messages = [];
            state.error = action.error.message;
        })
    }
});

export default messageSlice.reducer;
