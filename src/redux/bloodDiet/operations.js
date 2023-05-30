import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

//import { store } from '../store';
//import { apiAxios, apiToken } from '../../servises/api';

import { apiAxios } from '../../servises/api';


export const getDiet = createAsyncThunk(
  'blood',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.post('bloodproducts', credentials);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getDietUser = createAsyncThunk(
  'blood',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiAxios.patch('users/update', credentials);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const clearState = createAction('data/clearState');
export const toggleModal = createAction('showModal/toggleModal');
export const changeUserDate = createAction('userDate/changeUserDate');
