import axios from 'axios';
import { BaseResponse } from '@src/Models';
import { FormLogin, FormLoginResponse, FormRegister, FormRegisterResponse, UserInfo } from '@src/Models/auth';
import { BaseService } from '.';

const endpoint = 'users';

class AuthService extends BaseService<BaseResponse> {
    constructor() {
        super(endpoint);
    }

    async register(data: FormRegister) {
        return this.post<FormRegisterResponse, FormRegister>(data, { url: `${endpoint}/register` });
    }

    async login(data: FormLogin) {
        return this.post<FormLoginResponse>(data, { url: `${endpoint}/login` });
    }

    async getMyProfile() {
        this.get<BaseResponse<UserInfo>>(`${endpoint}/me`);
    }
}

const authService = new AuthService();
export default authService;
