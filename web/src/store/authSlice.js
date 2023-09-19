import { createSlice } from '@reduxjs/toolkit'
import API from '../services/api/API'


const initialState = {
    token: localStorage.getItem("TOKEN"),
    isLoggedIn: !!localStorage.getItem("TOKEN"),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
            // TODO: Move to a service
            localStorage.setItem("TOKEN", action.payload);
            API.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`;
        },
        logout: (state) => {
            state.token = null;
            state.isLoggedIn = false;
            // TODO: Move to a service
            localStorage.removeItem("TOKEN");
            API.defaults.headers.common['Authorization'] = null;
        },
        updateUserDetails: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.role = action.payload.role;
        },
    },
})

export const { login, logout, updateUserDetails } = authSlice.actions
export default authSlice.reducer