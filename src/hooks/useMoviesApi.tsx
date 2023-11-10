import { useCallback } from "react";
import { MovieStructure } from "../store/features/movies/types";

const useMoviesApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getMovies = useCallback(async () => {
    const response = await fetch(`${apiUrl}/movies?_limit=6`);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, [apiUrl]);

  const changeIsWatchedMovies = useCallback(
    async (movie: MovieStructure) => {
      const response = await fetch(`${apiUrl}/${movie.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ hasBeenSeen: !movie.isWatched }),
      });
      if (!response.ok) return false;
      return true;
    },
    [apiUrl],
  );
  const addMovieToApi = async (movie: MovieStructure) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(movie),
    });
    if (!response.ok) return false;
    return true;
  };

  return { getMovies, changeIsWatchedMovies, addMovieToApi };
};

export default useMoviesApi;
