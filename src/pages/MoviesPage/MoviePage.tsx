import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { loadMoviesActionCreator } from "../../store/features/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMovies } = useMoviesApi();

  useEffect(() => {
    (async () => {
      const currentMovies = await getMovies();
      dispatch(loadMoviesActionCreator(currentMovies));
    })();
  }, [dispatch, getMovies]);

  return (
    <section>
      <h2 className="page-title">The Movies List</h2>
      <main>
        <MoviesList />
      </main>
    </section>
  );
};

export default MoviesPage;
