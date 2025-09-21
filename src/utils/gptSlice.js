import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showgptSearch: false,
    },
    reducers: {
        togglegptSearch: (state,) => {
            state.showgptSearch = !state.showgptSearch;
        }
    }
})

export const { togglegptSearch } = gptSlice.actions;

export default gptSlice.reducer;