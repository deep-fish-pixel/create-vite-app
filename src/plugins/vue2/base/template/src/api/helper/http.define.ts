import type {
  AxiosInterceptorManager,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export interface AxiosInterceptors {
  request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
  response: AxiosInterceptorManager<AxiosResponse>;
}

/**
 * @description：请求方法
 */
export enum HttpMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface HttpParams {
  [key: string]: any;
}

export interface HttpResponse<T> {
  /**
   * 响应体信息字段名
   */
  resultCode: string;
  /**
   * 响应体信息字段名
   */
  resultDesc: string;
  /**
   * 响应体信息字段名
   */
  resultData: T;
}

/**
 * 请求配置
 */
export enum ResultCodeEnum {
  SUCCESS = 'WL-0000',
  ERROR = 'fail',
  AUTH_FAILED = 'WL-0014',
}
