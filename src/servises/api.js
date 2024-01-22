import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

//! let store;
// export const injectStore = _store => {
//   store = _store;
// };

export const apiAxios = axios.create({
  withCredentials: true,
  // headers: {
  //   'Content-type': 'application/json',
  // },
  // baseURL: 'http://localhost:5001/api/',
  baseURL: 'http://stellular-mooncake-5f1ff9.netlify.app/api/',
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
  const dispatch = useDispatch();

  apiAxios.interceptors.request.use(
    async config => {
      const token = localStorage.getItem('token');
      // const token = useSelector(selectToken);
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
          // const dispatch = useDispatch();
          //! const refreshToken = store.getState().auth.refreshToken;
          // const response = await store.dispatch(
          //   refreshTokenApi({ refreshToken })
          // );
          // const { token } = response;
          //! const data = await axios.post(
          //   'http://localhost:5001/api/auth/refresh',
          //   { refreshToken }
          // );

          const data = await axios.get(
            // 'http://localhost:5001/api/auth/refresh',
            'http://stellular-mooncake-5f1ff9.netlify.app/api/auth/refresh',
            {
              withCredentials: true,
            }
          );

          const token = data.data.token;

          localStorage.setItem('token', token);

          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch (error) {
          dispatch(logOut());
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default useAxiosInterceptor;
