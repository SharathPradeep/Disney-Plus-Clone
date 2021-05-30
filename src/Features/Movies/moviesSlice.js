import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recommends: null,
    newDisney: null,
    originals: null,
    trending: null
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommends = action.payload.recommends;
            state.newDisney = action.payload.newDisney;
            state.originals = action.payload.originals;
            state.trending = action.payload.trending;
        }
    }
});

export const { setMovies } = moviesSlice.actions;

export const selectRecommends = (state) => state.movies.recommends;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectOriginals = (state) => state.movies.originals;
export const selectTrending = (state) => state.movies.trending;

export default moviesSlice.reducer;
