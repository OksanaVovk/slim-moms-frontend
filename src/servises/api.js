import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { refreshTokenApi } from 'redux/auth/auth-operations';
import { store } from '../redux/store';

export const apiAxios = axios.create({
  withCredentials: true,

  baseURL: 'https://slim-moms-backendpart.onrender.com/api/',
});

export const apiToken = {
  set(token) {
    apiAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiAxios.defaults.headers.common.Authorization = '';
  },
};

const useAxiosInterceptor = () => {
  // const dispatch = useDispatch();

  apiAxios.interceptors.request.use(
    async config => {
      // const token = localStorage.getItem('token');
      const token = store.getState().auth.token;

      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  apiAxios.interceptors.response.use(
    response => {
      return response;
    },
    async function (error) {
      const originalRequest = error.config;

      // If the error status is 401 and there is no originalRequest._retry flag,
      // it means the token has expired and we need to refresh it
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // const data = await axios.get(
          //   'https://slim-moms-backendpart.onrender.com/api/auth/refresh',
          //   {
          //     withCredentials: true,
          //   }
          // );
          const data = await refreshTokenApi();

          const token = data.data.token;

          // localStorage.setItem('token', token);
          apiToken.set(token);

          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch (error) {
          store.dispatch(logOut());
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default useAxiosInterceptor;
