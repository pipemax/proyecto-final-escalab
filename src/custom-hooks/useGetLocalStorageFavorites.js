import { useState } from "react";
import { addFavorite } from "../features/favorites/favoriteSlice";
import { useDispatch } from "react-redux";

const useGetLocalStorageFavorites = () => {
    const [favoritesList, setFavorites] = useState(() =>{
        const favoritesLocal = window.localStorage.getItem('react_p_favorites');
        return favoritesLocal !== null ? JSON.parse(favoritesLocal) : [];
    });
    const dispatch = useDispatch();

    async function loadLocalStorage() {
        favoritesList.map(e => dispatch(addFavorite(e)));
    }

    return { loadLocalStorage };
};

export default useGetLocalStorageFavorites;