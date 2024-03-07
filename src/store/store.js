import { configureStore, combineReducers } from "@reduxjs/toolkit";
import galleryReducer from './gallery'

const rootReducer = combineReducers({
    gallery: galleryReducer
});

export const store = configureStore({
    reducer: rootReducer
})