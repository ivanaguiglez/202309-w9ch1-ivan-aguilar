export interface MovieStructure {
  id: number;
  title: string;
  director: string;
  image: string;
  description: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
