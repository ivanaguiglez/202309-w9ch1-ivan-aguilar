import { MovieStructure } from "../../store/features/movies/types";
import MovieCardStyled from "./MoviCardStyled";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, description, picture },
}: MovieCardProps): React.ReactElement => {
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
      </article>
    </MovieCardStyled>
  );
};

export default MovieCard;
