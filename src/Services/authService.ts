import { BaseService } from '.';

const endpoint = 'profile';

interface Responses {
    isSuccess: boolean;
}
class AuthService extends BaseService<Responses> {
    constructor() {
        super(endpoint);
    }

    getProfile(id: string) {
        // do this
        // this.get<Responses>(id);

        // mock
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const rand = Math.random() * 10;
                if (rand >= 5) {
                    resolve(id);
                } else {
                    reject(id);
                }
            }, 500);
        });
    }
}
export default new AuthService();
