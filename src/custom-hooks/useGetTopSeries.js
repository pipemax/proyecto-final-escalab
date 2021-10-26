import { useState } from "react";
import { getTopSeriesUrl } from "../constants/constants";

const useGetSeries = () => {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getTopSeries() {
        fetch(getTopSeriesUrl())
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setSeries(data);
            setLoading(false);
            setError(false);
        })
        .catch((error) => {
            setLoading(false);
            setError(error);
        });
}

return { series, loading, error, getTopSeries };
};

export default useGetSeries;