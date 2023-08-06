import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiToken, apiAxios } from 'servises/api';
import { creatNotifyError, createNotifySuccess } from 'helpers/createNotify';

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
  } catch (error) {
    creatNotifyError(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('auth/login', credentials);
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

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
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
      creatNotifyError(error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
