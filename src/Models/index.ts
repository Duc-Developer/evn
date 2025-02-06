import { AxiosInterceptorManager, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export interface AxiosInterceptors {
    request: AxiosInterceptorManager<InternalAxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
}
