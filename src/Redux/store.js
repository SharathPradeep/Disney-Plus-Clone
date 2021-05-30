import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import userReducer from '../Features/user/userSlice';

import moviesReducer from '../Features/Movies/moviesSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});