import { useState } from "react";
import { getTitleById } from "../constants/constants";

const useGetTitle = () => {
    const [title, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getTitle(itemId) {
        fetch(getTitleById(itemId))
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

    return { title, loading, error, getTitle };
};

export default useGetTitle;