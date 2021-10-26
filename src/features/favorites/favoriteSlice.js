import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        counter: 0
    },
    reducers: {
        addFavorite: (state, action) => {
            const verifier = state.favorites.filter(element => element.id === action.payload.id);
            const favoritesLocal = window.localStorage.getItem('react_p_favorites') !== null ? JSON.parse(window.localStorage.getItem('react_p_favorites')) : null;
            if(verifier.length === 0)
            {
                state.favorites.push(action.payload);
                state.counter = state.counter + 1;
                if (favoritesLocal != null)
                {
                    favoritesLocal.push(action.payload);                    
                    localStorage.setItem('react_p_favorites', JSON.stringify(favoritesLocal));
                }
                else
                {
                    const aux = [];
                    aux.push(action.payload);
                    localStorage.setItem('react_p_favorites', JSON.stringify(aux));
                }
            }
        },
        removeFavorite: (state, action) => {
            const newState = state.favorites.filter(element => element.id !== action.payload.id);
            const favoritesLocal = window.localStorage.getItem('react_p_favorites') !== null ? JSON.parse(window.localStorage.getItem('react_p_favorites')) : null;
            state.favorites = newState;
            state.counter = state.counter - 1;
            if(favoritesLocal != null)
            {
                localStorage.setItem('react_p_favorites', JSON.stringify(favoritesLocal.filter(element => element.id !== action.payload.id)));
            }
        },
    },
});

export const { addFavorite, removeFavorite } = slice.actions;

export const favorites = state => state.favorites.favorites;

export const counter = state => state.favorites.counter;

export default slice.reducer;