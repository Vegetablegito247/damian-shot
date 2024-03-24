import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const logUser = createAsyncThunk('user/logUser', async (userCredential) => {
    try {
        const response = await axios.post('http://localhost:5000/login/', userCredential);
        return response.data;
    }
    catch (error) {
        throw error.response?.data?.error || 'An error occurred during login';
    }
});

export const createUser = createAsyncThunk('user/Signup', async (newUser) => {
    try {
        const response = await axios.post('http://localhost:5000/signup/', newUser)
        return response.data;
    }
    catch (error) {
        throw error.response?.data?.error || 'An error occurred during signup';
    }
});

const initialState = {
    logged: [],
    newUser: [],
    error: null,
    status: 'Idle'
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        logoutUser :(state) => {
            state.logged = [];
            state.newUser = [];
            state.error = null;
            state.status = 'Idle';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(logUser.pending, (state) => {
                state.status = 'Loading';
            })
            .addCase(logUser.fulfilled, (state, action) => {
                state.status = 'Succeeded';
                state.logged = action.payload;
                state.error = null;
            })
            .addCase(logUser.rejected, (state, action) => {
                state.status = 'Failed';
                state.logged = [];
                state.error = action.error.message;
            })
            .addCase(createUser.pending, (state) => {
                state.status = 'Loading';
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = 'Succeeded';
                state.newUser = action.payload;
                state.error = null;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = 'Failed';
                state.newUser = [];
                state.error = action.error.message;
            })
    }
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;