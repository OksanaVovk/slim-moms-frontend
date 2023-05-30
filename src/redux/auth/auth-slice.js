import { createSlice } from '@reduxjs/toolkit';
import { logOut, register, logIn, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  // bloodType: null,
  token: null,
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
      // state.bloodType = null
      state.token = null;
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
      // state.bloodType = action.payload.data
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected]: state => {
      state.isLoading = false;
    },

    [logOut.pending]: state => {
      state.isLoading = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      // state.bloodType = null
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
