import { useState } from "react";
import { searchMoviesUrl } from "../constants/constants";

const useGetSearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loadingMovies, setLoading] = useState(true);
    const [errorMovies, setError] = useState(false);

    async function getSearchMovies(query) {
        fetch(searchMoviesUrl(query))
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results);
            setLoading(false);
            setError(false);
        })
        .catch((error) => {
            setLoading(false);
            setError(error);
        });
}

return { movies, loadingMovies, errorMovies, getSearchMovies };
};

export default useGetSearchMovies;