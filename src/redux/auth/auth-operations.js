import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiToken, apiAxios } from 'servises/api';
import { creatNotifyError, createNotifySuccess } from 'helpers/createNotify';
import axios from 'axios';
import { authActions } from './auth-slice';

const token = apiToken;
const API = apiAxios;

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/register', credentials);
      createNotifySuccess(
        `User ${data.data.user.name} successfully registered`
      );
      return data;
    } catch (error) {
      creatNotifyError(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await API.get('auth/logout');
    token.unset();
    // localStorage.setItem('token', null);
  } catch (error) {
    token.unset();
    creatNotifyError(error.message);
    thunkAPI.dispatch(authActions.resetAuth());
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/login', credentials);
      // localStorage.setItem('token', data.data.token);
      token.set(data.data.token);
      return data;
    } catch (error) {
      creatNotifyError(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInGoogle = createAsyncThunk(
  'auth/logingoogle',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/logingoogle', credentials);
      // localStorage.setItem('token', data.data.token);
      token.set(data.data.token);
      return data;
    } catch (error) {
      creatNotifyError(error.response.data.message);
      localStorage.setItem(
        'error-message',
        JSON.stringify(error.response.data)
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshTokenApi = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://slim-moms-backendpart.onrender.com/api/auth/refresh',
        credentials
      );
      token.set(data.token);
      return data;
    } catch (error) {
      creatNotifyError(error.message);
      token.unset();
      thunkAPI.dispatch(authActions.resetAuth());
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await API.get('users/current');
      return data;
    } catch (error) {
      token.unset();
      thunkAPI.dispatch(authActions.resetAuth());
      creatNotifyError(error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
