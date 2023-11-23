import { useQuery } from "react-query";
import useFetchConfig from "./useFetchConfig";


const fetchMovieCredits = async (movieId: string) => {
    const apiKey = useFetchConfig.apiKey;
    const apiUrl = useFetchConfig.apiUrl;
    const response = await fetch(
      `${apiUrl}movie/${movieId}/credits?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};

export const useFetchMovieCreditsQuery = (selectedMovieId:string) => {
    return useQuery(
        ['movieCredits', selectedMovieId],
        async () => fetchMovieCredits(selectedMovieId!),
        {
            enabled: !!selectedMovieId,
        }
    )
}