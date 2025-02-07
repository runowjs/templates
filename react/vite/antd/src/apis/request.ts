import { getToken } from '@/utils/token';
import axios, { type AxiosResponse } from 'axios';

/**
 * request
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

/**
 * request interceptor
 */
request.interceptors.request.use(
  (config) => {
    const token = getToken();

    // inject token
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * response interceptor
 */
request.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => {
    // Custom response
    // const { code, msg } = response.data;
    // if (code < 200 || code > 299) {
    //   throw new Error(msg);
    // }
    // return response.data;
    return response.data;
  },
  (error) => {
    if (error.response) {
      // Server error
      return Promise.reject(error.response.data.msg);
    } else if (error.request) {
      // No response received
      return Promise.reject(error.message || 'Timeout');
    } else {
      // Error before request
      return Promise.reject(error.message);
    }
  },
);

export default request;
