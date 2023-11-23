import { useQuery } from "react-query";
import useFetchConfig from "./useFetchConfig";
import Movie from "./Movie";



 
const fetchMovieList = async () => {
    const apiKey = useFetchConfig.apiKey;
    const apiUrl = useFetchConfig.apiUrl;

    const response = await fetch(
      `${apiUrl}movie/now_playing?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const { results } = await response.json();
      console.log(results);
      return results;
};

export const useFetchListQuery = () => {
    return useQuery<Movie[]> (
        'movieList',
        async () => fetchMovieList()
    )
}