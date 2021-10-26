import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'login',
    initialState: {
        value: false
    },
    //Métodos
    reducers: {
        logIn: state => {
            state.value = true;
        },
        logOut: state => {
            state.value = false;
        }
    },
});

export const { logIn, logOut } = slice.actions;

export const logged = state => state.login.value;

export default slice.reducer;