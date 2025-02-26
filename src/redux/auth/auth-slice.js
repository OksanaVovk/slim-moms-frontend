import { createSlice } from '@reduxjs/toolkit';
import {
  logOut,
  register,
  logIn,
  fetchCurrentUser,
  logInGoogle,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    setNewToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [logIn.pending]: state => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected]: state => {
      state.isLoading = false;
    },
    [logInGoogle.pending]: state => {
      state.isLoading = true;
    },
    [logInGoogle.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.refreshToken = action.payload.data.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logInGoogle.rejected]: state => {
      state.isLoading = false;
    },

    [logOut.pending]: state => {
      state.isLoading = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
