import { BaseResponse } from '.';

export interface UserInfo {
    id: string | number;
    username: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
}

export interface FormRegister {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface FormRegisterResponse
    extends BaseResponse<{
        accessToken: string;
    }> {}

export interface FormLogin {
    username: string;
    password: string;
}

export interface FormLoginResponse
    extends BaseResponse<{
        accessToken: string;
    }> {}
