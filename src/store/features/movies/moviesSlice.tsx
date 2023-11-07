import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesStateStructure, MovieStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadmovies: (
      currentState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => ({ ...currentState, movies: action.payload }),
  },
});

export const { loadmovies: loadMoviesActionCreator } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
