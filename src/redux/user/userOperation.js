import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAxios } from 'servises/api';

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.patch(`users/update`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.get('users/current', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
