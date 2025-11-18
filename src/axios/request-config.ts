import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import {
  requestInterceptorsConfig,
  requestInterceptorsError,
} from "./request-interceptors";

/**
 * axios 实例
 *
 * 泛型：P：请求参数类型，R：响应数据类型
 */
export class AxiosClientClass {
  readonly instance: AxiosInstance;
  private config: AxiosRequestConfig;

  constructor(config: AxiosRequestConfig) {
    this.config = config;
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      requestInterceptorsConfig,
      requestInterceptorsError
    );
  }

  getConfig(): AxiosRequestConfig {
    return this.config;
  }

  // 封装get请求
  get<P, R>(
    url: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return this.instance.get(url, { params, ...config });
  }

  // 封装post请求
  post<P, R>(url: string, data?: P, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post(url, data, config);
  }

  // 封装put请求
  put<P, R>(url: string, data?: P, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.put(url, data, config);
  }

  // 封装delete请求
  delete<P, R>(
    url: string,
    params?: P,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.delete(url, { params, ...config });
  }
}

export const axiosInstance = new AxiosClientClass({
  // baseURL: "http://localhost:8080",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
