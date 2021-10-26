import { useState } from "react";
import { getTopMoviesUrl } from "../constants/constants";

const useGetMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getTopMovies() {
        fetch(getTopMoviesUrl())
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMovies(data);
            setLoading(false);
            setError(false);
        })
        .catch((error) => {
            setLoading(false);
            setError(error);
        });
}

return { movies, loading, error, getTopMovies };
};

export default useGetMovies;