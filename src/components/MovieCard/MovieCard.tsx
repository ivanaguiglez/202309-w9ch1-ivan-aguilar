import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import MovieCardStyled from "./MovieCardStyled";
import { MovieStructure } from "../../store/features/movies/types";
import { toggleWatchedMoviesActionCreator } from "../../store/features/movies/moviesSlice";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, picture, description, id },
}: MovieCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const toggleWatchedStatus = useCallback(() => {
    dispatch(toggleWatchedMoviesActionCreator(id));
  }, [dispatch, id]);

  return (
    <MovieCardStyled>
      <article className="card-container">
        <img
          className="card_picture"
          src={picture}
          alt={title}
          width="300"
          height="450"
        />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <label className="card__checkbox">
          Watched 😃
          <input
            className="card__input"
            type="checkbox"
            name="checkbox"
            onChange={toggleWatchedStatus}
          />
        </label>
      </article>
    </MovieCardStyled>
  );
};

export default MovieCard;
