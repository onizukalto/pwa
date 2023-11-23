import React from 'react';
import { useFetchDetailsQuery } from '../useFetch/useFetchDetailsQuery';
import { Link, useParams } from 'react-router-dom';
import { useFetchMovieCreditsQuery } from '../useFetch/useFetchMovieCreditsQuery';
import imageDefaut from '../../public/imageDefaut.png';
import { useFetchMovieImagesQuery } from '../useFetch/useFetchMovieImages';
import MovieReleaseDate from './MovieReleaseDate';

const MovieDetails: React.FC = () => {
  const { id } = useParams() as { id: string };
  const { data: movie, isLoading} = useFetchDetailsQuery(id);
  const { data: credits, isLoading: isLoadingCredits} = useFetchMovieCreditsQuery(id);
  const { data: images, isLoading: isLoadingImage } = useFetchMovieImagesQuery(id);

  if (!isLoading && !isLoadingCredits && !isLoadingImage) {
    return (
      <>
        <div className="fixed inset-0 bg-cover bg-no-repeat bg-center blur-lg z-0"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.poster_path}")`,
            backgroundSize: '100%'
          }}>
        </div>

        <div className="relative z-10 min-h-screen overflow-hidden">
          <Link to={`/`} className="flex justify-start inline-flex text-white px-2 py-2 transition-transform duration-300 hover:translate-x-[-10px]">
          ← Back
          </Link>
          <div className="items-end flex flex-row gap-4 max-h-screen">
            <div className="relative w-auto h-auto flex flex-col">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="min-w-[300px] min-h-[300px] rounded-lg"
              />
            </div>
            <div className="items-start relative flex flex-col text-white fontFamily:Roboto">
              <h1 className="mb-1 text-4xl">{movie.title}</h1>
              <p className="mb-1 items-start">{movie.overview}</p>
              <p className="italic">{movie.genres.map(genre => genre.name).join(', ')}</p>
              <MovieReleaseDate releaseDate = {movie.release_date}></MovieReleaseDate>
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-3xl">Credits</h1>
            <div className="pt-2 gap-6 rounded flex flex-row overflow-x-auto">
              {credits.cast.slice(0, 10).map(cast => (
                <div className="min-w-[200px] min-h-[200px] rounded-full flex flex-col items-start mb-4">
                  <img
                    src={cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : imageDefaut}
                    alt={cast.name}
                    style={{ width: '100%' }}
                    className="rounded-lg"
                  />
                  <p className="items-start text-sm text-white">{cast.name}</p>
                  <p className="items-start text-sm text-stone-300">{cast.character}</p>
                </div>
              ))}

              {credits.crew
                .filter(crew => crew.job === 'Director' || crew.job === 'Original Music Composer')
                .map(crew => (
                  <div className="min-w-[200px] min-h-[200px] rounded-lg flex flex-col items-start mb-4">
                    <img
                      src={(crew.profile_path != null) ? `https://image.tmdb.org/t/p/original${crew.profile_path}` : imageDefaut}
                      alt={crew.name}
                      style={{ width: '100%' }}
                      className="rounded-lg"
                    />
                    <p className="items-start text-sm text-white">{crew.name}</p>
                    <p className="items-start text-sm text-stone-300">{crew.job}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-3xl">Images</h1>
            <div className="pt-2 gap-6 rounded flex flex-row overflow-x-auto">
              {images.backdrops
                .filter(backdrop => backdrop.iso_639_1 === null)
                .map(backdrop => (
                  <div className="min-w-[1200px] min-h-[1200px] rounded-full flex flex-col items-start mb-2">
                    <img
                      src={backdrop.file_path ? `https://image.tmdb.org/t/p/original${backdrop.file_path}` : imageDefaut}
                      alt={backdrop.name}
                      style={{ width: '100%' }}
                      className="rounded-lg"
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default MovieDetails;
