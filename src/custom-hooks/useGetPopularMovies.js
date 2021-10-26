import { useState } from "react";
import { getPopularMoviesUrl } from "../constants/constants";

const useGetPopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getPopularMovies() {
        fetch(getPopularMoviesUrl())
        .then((response) => response.json())
        .then((data) => {
            setPopularMovies(data);
            setLoading(false);
            setError(false);
        })
        .catch((error) => {
            setLoading(false);
            setError(error);
        });
    }

    return { popularMovies, loading, error, getPopularMovies };
};

export default useGetPopularMovies;