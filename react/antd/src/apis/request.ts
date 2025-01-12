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

    // 携带token
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
    // 根据后端自行处理响应
    // const { code, msg } = response.data;
    // if (code < 200 || code > 299) {
    //   throw new Error(msg);
    // }
    // return response.data;
    return response.data;
  },
  (error) => {
    if (error.response) {
      // 服务器返回了一个错误响应
      return Promise.reject(error.response.data.msg);
    } else if (error.request) {
      // 请求发出但没有收到响应
      return Promise.reject(error.message || '请求超时');
    } else {
      // 在设置请求时发生了错误
      return Promise.reject(error.message);
    }
  },
);

export default request;
