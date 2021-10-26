import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import favoriteReducer from "../features/favorites/favoriteSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        favorites: favoriteReducer
    }
});