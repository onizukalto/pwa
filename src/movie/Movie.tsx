interface Movie {
    id: string;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    genres: Array<{ name: string }>;
}

export default Movie;
  