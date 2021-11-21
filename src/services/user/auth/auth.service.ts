import type { User, UserCredentials } from '@/services/user/types';
import BaseApiService from '@/services/common/BaseApiService';

export default class AuthService extends BaseApiService {
  resource = '/auth/';

  async login (credentials: UserCredentials) {
    return await this.post<User>('log-in', credentials);
  }
}
