import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { loadMoviesActionCreator } from "../../store/features/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesPageStyled from "./MoviesPageStyled";
import { NavLink } from "react-router-dom";

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
    <MoviesPageStyled>
      <h2 className="page-title">Movies to watch this week</h2>
      <main className="ul-container">
        <MoviesList />
        <NavLink className="navlink" to={"/New-Movie-Form"}>
          🎬 Create New Movie 🎬
        </NavLink>
      </main>
    </MoviesPageStyled>
  );
};

export default MoviesPage;
