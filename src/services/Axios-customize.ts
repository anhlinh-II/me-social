import axiosClient from "axios";
import { Mutex } from "async-mutex";
import { IApiResponse } from "../types/backend";
import { notification } from "antd";
import { store } from '../redux/store';
import { setRefreshTokenAction } from "../redux/slice/accountSlice";

interface AccessTokenResponse {
     access_token: string;
}

/**
 * Creates an initial 'axios' instance with custom settings.
 */

const instance = axiosClient.create({
     baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : import.meta.env.VITE_BACKEND_URL,
     withCredentials: true
});


const mutex = new Mutex();
const NO_RETRY_HEADER = 'x-no-retry';

const handleRefreshToken = async (): Promise<string | null | undefined> => {
     return await mutex.runExclusive(async () => {
          const res = await instance.get<IApiResponse<AccessTokenResponse>>('/api/auth/refresh');
          if (res && res.data) return res.data?.result?.access_token;
          else return null;
     });
};

instance.interceptors.request.use(function (config) {
     if (typeof window !== "undefined" && window.localStorage.getItem('access_token')) {
          config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('access_token');
     }
     if (!config.headers.Accept && config.headers["Content-Type"]) {
          config.headers.Accept = "application/json";
          config.headers["Content-Type"] = "application/json; charset=utf-8";
     }
     return config;
});

/**
 * Handle all responses. It is possible to add handlers
 * for requests, but it is omitted here for brevity.
 */
instance.interceptors.response.use(
     (res) => res,
     async (error) => {
         if (error.config && error.response
             && +error.response.status === 401
             && error.config.url !== '/api/auth/login'
             && !error.config.headers[NO_RETRY_HEADER]
         ) {
             const access_token = await handleRefreshToken();
             error.config.headers[NO_RETRY_HEADER] = 'true'
             if (access_token) {
                 error.config.headers['Authorization'] = `Bearer ${access_token}`;
                 localStorage.setItem('access_token', access_token)
                 return instance.request(error.config);
             }
         }
 
         if (
             error.config && error.response
             && +error.response.status === 400
             && error.config.url === '/api/auth/refresh'
             && location.pathname.startsWith("/admin")
         ) {
             const message = error?.response?.data?.error ?? "Có lỗi xảy ra, vui lòng login.";
             //dispatch redux action
             store.dispatch(setRefreshTokenAction({ status: true, message }));
         }
 
         if (+error.response.status === 403) {
             notification.error({
                 message: error?.response?.data?.message ?? "",
                 description: error?.response?.data?.error ?? ""
             })
         }
 
         return error?.response?.data ?? Promise.reject(error);
     }
 );
 
 /**
  * Replaces main `axios` instance with the custom-one.
  *
  * @param cfg - Axios configuration object.
  * @returns A promise object of a response of the HTTP request with the 'data' object already
  * destructured.
  */
 // const axios = <T>(cfg: AxiosRequestConfig) => instance.request<any, T>(cfg);
 
 // export default axios;
 
 export default instance;

