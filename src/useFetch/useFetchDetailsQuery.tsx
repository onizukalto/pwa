import { useQuery } from "react-query";
import useFetchConfig from "./useFetchConfig";


const fetchMovieDetails = async (movieId: string) => {
    const apiKey = useFetchConfig.apiKey;
    const apiUrl = useFetchConfig.apiUrl;
    const response = await fetch(
      `${apiUrl}movie/${movieId}?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};

export const useFetchDetailsQuery = (selectedMovieId:string) => {
    return useQuery(
        ['movieDetails', selectedMovieId],
        async () => fetchMovieDetails(selectedMovieId!),
        {
            enabled: !!selectedMovieId,
        }
    )
}