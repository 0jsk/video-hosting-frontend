import type { AuthActions, AuthMutations, State } from '@/services/user/auth/types';

export const state = (): State => ({
  isAuthenticated: false,
  user: null
});

export const mutations: AuthMutations = {
  SET_USER (state, user) {
    state.user = user;
  },
  SET_AUTHENTICATED (state, { authenticated }) {
    state.isAuthenticated = authenticated;
  }
};

export const actions: AuthActions = {
  async login ({ dispatch }, credentials) {
    await this.$services.auth.login(credentials);

    dispatch('getCurrentUser');
  },
  async logout ({ commit }, sendRequest = true) {
    if (sendRequest) {
      await this.$services.auth.logout();
    }

    commit('SET_USER', null);
    commit('SET_AUTHENTICATED', { authenticated: false });
  },
  async getCurrentUser ({ commit, dispatch }) {
    try {
      const user = await this.$services.auth.getCurrentUser();
      commit('SET_USER', user);
      commit('SET_AUTHENTICATED', { authenticated: true });
    } catch {
      dispatch('logout');
    }
  }
};
