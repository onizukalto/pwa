import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchListQuery } from '../useFetch/useFetchListQuery';
import useFetchSearchQuery from '../useFetch/useFetchSearchQuery';
import Movie from './Movie';
import imageDefaut from '../../public/defaultMovie.jpeg'

const MovieList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data: movies, isLoading: isLoadingList } = useFetchListQuery();
  const { data: searchResults, isLoading: isLoadingSearch } = useFetchSearchQuery(searchTerm);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  if (isLoadingList || isLoadingSearch) {
    return (
      <div className="flex flex-wrap w-full h-screen p-4">
        <div className="mb-2 flex justify-between w-screen max-h-12">
          <h1 className="mb-2 text-3xl max-h-12">🎬🍿 Movie library</h1>
          <input
            type="text"
            placeholder="🔎 Search for movie............."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-4 pr-2 py-2 mb-4 rounded-full dark:bg-gray-700 max-h-12 w-72"
          />
        </div>
      </div>
    );
  }
  const displayedMovies: Movie[] = searchTerm ? searchResults.results : movies;

  return (
    <div className="flex flex-wrap w-full h-screen p-4">
      <div className="mb-2 flex justify-between w-screen max-h-12">
        <h1 className="mb-2 text-3xl max-h-12">🎬🍿 Movie library</h1>
        <input
          type="text"
          placeholder="🔎 Search for movie"
          value={searchTerm}
          onChange={handleSearch}
          className="pl-4 pr-2 py-2 mb-4 rounded-full dark:bg-gray-700 justify-between h-10 w-72"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 
                      3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9 6xl:grid-cols-10 gap-4">
        {displayedMovies && displayedMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="cursor-pointer">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : imageDefaut}
                alt={movie.title}
                className="w-full rounded-md h-auto transition-transform transform-gpu hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
