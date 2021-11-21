import AuthService from '@/services/user/auth/auth.service';

export enum Services {
  AUTH = 'auth'
}

export const createServices = () => ({
  [Services.AUTH]: new AuthService()
});
