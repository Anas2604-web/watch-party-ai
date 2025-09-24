import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showgptSearch: false,
        movieNames: null,
    },
    reducers: {
        togglegptSearch: (state,) => {
            state.showgptSearch = !state.showgptSearch;
        },
        getMovieSearch: (state,action) => {
            state.movieNames=action.payload; 
        }
    }
})

export const { togglegptSearch, getMovieSearch } = gptSlice.actions;

export default gptSlice.reducer;