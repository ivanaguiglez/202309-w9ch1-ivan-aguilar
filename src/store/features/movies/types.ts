export interface MovieStructure {
  id: number;
  title: string;
  director: string;
  picture: string;
  description: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
