import type { AuthActions, State } from '@/services/user/auth/types';
import type { User } from '@/services/user/types';

export const state = (): State => ({
  isAuthenticated: false,
  user: null
});

// @ts-ignore
export const actions: AuthActions = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login ({ dispatch }, credentials): Promise<User> {
    return await this.$services.auth.login({
      email: 'test3@test3.com',
      password: 'test2!@#QQQQ'
    });
  }
};
