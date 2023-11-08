export interface MovieStructure {
  id: number;
  title: string;
  picture: string;
  description: string;
  isWatched: boolean;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
