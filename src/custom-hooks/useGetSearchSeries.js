import { useState } from "react";
import { searchSeriesUrl } from "../constants/constants";

const useGetSearchMovies = () => {
    const [series, setSeries] = useState([]);
    const [loadingSeries, setLoading] = useState(true);
    const [errorSeries, setError] = useState(false);

    async function getSearchSeries(query) {
        fetch(searchSeriesUrl(query))
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setSeries(data.results);
            setLoading(false);
            setError(false);
        })
        .catch((error) => {
            setLoading(false);
            setError(error);
        });
}

return { series, loadingSeries, errorSeries, getSearchSeries };
};

export default useGetSearchMovies;