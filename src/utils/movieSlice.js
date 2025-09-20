import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name: "movies",
    initialState: {
      nowPlayingMovies : null,
      popularMovies: null,
      topRatedMovies: null,
      trendingMovies: null,
      trailerVideo: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies =  action.payload;
        },
        addPopular: (state, action) => {
            state.popularMovies =  action.payload;
        },
        addTopRated: (state, action) => {
            state.topRatedMovies =  action.payload;
        },
        addTrending: (state, action) => {
            state.trendingMovies =  action.payload;
        },
        addMovieTrailer: (state,action) => {
            state.trailerVideo = action.payload;
        }

    },
})

export const { addNowPlaying, addPopular, addTopRated, addTrending, addMovieTrailer } = movieSlice.actions;

export default movieSlice.reducer;