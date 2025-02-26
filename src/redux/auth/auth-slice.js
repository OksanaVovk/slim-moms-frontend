import { createSlice } from '@reduxjs/toolkit';
import {
  logOut,
  register,
  logIn,
  fetchCurrentUser,
  logInGoogle,
  refreshTokenApi,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
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
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [refreshTokenApi.pending]: state => {
      state.isLoading = true;
    },
    [refreshTokenApi.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [refreshTokenApi.rejected]: state => {
      state.user = { name: null, email: null };
      state.isLoading = false;
      state.isLoggedIn = false;
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
