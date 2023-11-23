import { useQuery } from 'react-query';
import useFetchConfig from "./useFetchConfig";


const useFetchSearchQuery = (searchTerm: String) => {
    const apiKey = useFetchConfig.apiKey;
    const apiUrl = useFetchConfig.apiUrl;

  const fetchSearchResults = async () => {
    if (!searchTerm) return [];
    const response = await fetch(`${apiUrl}search/movie?query=${searchTerm}&api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  return useQuery(['search', searchTerm], fetchSearchResults, {
    enabled: !!searchTerm,
  });
};

export default useFetchSearchQuery;
