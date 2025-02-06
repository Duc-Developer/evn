// import APP_CONFIGS from "@src/Constants/AppConfigs";
import AxiosService from './axiosService';
import type { AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios';

export class BaseService<T> {
    protected endpoint: string;
    protected controller: AxiosService = new AxiosService();

    constructor(endpoint: string) {
        this.endpoint = endpoint;
        this.init();
    }

    private init() {
        this.controller = new AxiosService();
        const newInterceptors = this.controller.getService().interceptors;
        newInterceptors.request.use(this.handleRequest);
        newInterceptors.response.use(this.handleSuccess, this.handleError);
        this.controller.setInterceptors(newInterceptors);
    }

    private handleRequest<T>(config: InternalAxiosRequestConfig<T>) {
        // you need set access token key in .env for used this feature
        // const accessToken = localStorage.getItem(APP_CONFIGS.ACCESS_TOKEN);
        // config.headers.Authorization =accessToken ? `Bearer ${accessToken}` : '';
        return config;
    }

    private handleSuccess<T>(response: AxiosResponse<T>) {
        return response;
    }

    private handleError<T>(error: AxiosResponse<T>) {
        return error;
    }

    async get<I = unknown>(id: string = '', config?: AxiosRequestConfig) {
        return this.controller.get<T & I>(`${this.endpoint}/${id}`, config);
    }

    async put<T = unknown>(id: string, data = {}, config?: AxiosRequestConfig) {
        const endpoint = config?.url ?? `${this.endpoint}/${id}`;
        return this.controller.put<T>(endpoint, data, config);
    }

    async post<T = unknown>(data?: unknown, config?: AxiosRequestConfig) {
        const endpoint = config?.url ?? this.endpoint;
        return this.controller.post<T>(endpoint, data ?? {}, config);
    }

    async delete(id: string) {
        return this.controller.delete(`${this.endpoint}/${id}`);
    }

    async patch(id: string) {
        return this.controller.patch(`${this.endpoint}/${id}`);
    }
}
