import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    refreshToken: null,
    account: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthTokens: (state, { payload: { token, refreshToken } }) => {
            state.token = token;
            state.refreshToken = refreshToken;
            sessionStorage.token = token;
        },
        setAccount: (state, { payload }) => {
            state.account = payload;
            sessionStorage.account = JSON.stringify(payload);
        },
        logout: (state) => {
            state.account = null;
            state.refreshToken = null;
            state.token = null;
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("account");
        }
    },
});

export const { setAuthTokens, setAccount, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = state => state.auth.user