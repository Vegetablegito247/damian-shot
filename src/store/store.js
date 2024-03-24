import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import galleryReducer from './gallery';
import messageReducer from './message';
import userReducer from './user';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    gallery: galleryReducer,
    message: messageReducer,
    user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor = persistStore(store)