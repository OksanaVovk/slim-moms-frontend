import axios from 'axios';

export const apiAxios = axios.create({
  baseURL: 'http://localhost:5001/api/',
});

export const apiToken = {
  set(token) {
    apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiAxios.defaults.headers.common.Authorization = '';
  },
};
