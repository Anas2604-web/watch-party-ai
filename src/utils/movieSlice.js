import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name: "movies",
    initialState: {
      nowPlayingMovies : null,
      trailerVideo: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies =  action.payload;
        },
        addMovieTrailer: (state,action) => {
            state.trailerVideo = action.payload;
        }
    },
})

export const { addNowPlaying, addMovieTrailer } = movieSlice.actions;

export default movieSlice.reducer;