export interface MovieStructure {
  id: number;
  title: string;
  picture: string;
  description: string;
  isWatched: boolean;
  image_url: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
