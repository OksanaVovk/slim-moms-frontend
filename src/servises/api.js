import axios from 'axios';

export const apiAxios = axios.create({
  baseURL: 'https://slim-moms-backend.onrender.com/api/',
});

export const apiToken = {
  set(token) {
    apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiAxios.defaults.headers.common.Authorization = '';
  },
};
