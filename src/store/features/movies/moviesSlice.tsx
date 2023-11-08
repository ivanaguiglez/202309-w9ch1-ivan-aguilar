import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesStateStructure, MovieStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState: MoviesStateStructure,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => ({ ...currentState, movies: action.payload }),

    toggleWatchedMovies: (
      currentState,
      action: PayloadAction<number>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: currentState.movies.map((movie) => ({
        ...movie,
        isWatched:
          movie.id === action.payload ? !movie.isWatched : movie.isWatched,
      })),
    }),
  },
});

export const {
  loadMovies: loadMoviesActionCreator,
  toggleWatchedMovies: toggleWatchedMoviesActionCreator,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
