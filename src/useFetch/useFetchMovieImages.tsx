import { useQuery } from "react-query";
import useFetchConfig from "./useFetchConfig";


const fetchMovieImages = async (movieId: string) => {
    const apiKey = useFetchConfig.apiKey;
    const apiUrl = useFetchConfig.apiUrl;
    const response = await fetch(
      `${apiUrl}movie/${movieId}/images?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};

export const useFetchMovieImagesQuery = (selectedMovieId:string) => {
    return useQuery(
        ['movieImages', selectedMovieId],
        async () => fetchMovieImages(selectedMovieId!),
        {
            enabled: !!selectedMovieId,
        }
    )
}