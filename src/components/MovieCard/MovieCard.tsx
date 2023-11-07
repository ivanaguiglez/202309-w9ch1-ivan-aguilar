import { MovieStructure } from "../../store/features/movies/types";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { title, description },
}: MovieCardProps): React.ReactElement => {
  return (
    <>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </>
  );
};

export default MovieCard;
