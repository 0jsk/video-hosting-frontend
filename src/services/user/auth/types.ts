import type { Action, ActionTree, Getter } from 'vuex';
import type { MutationType } from 'vuex-typekit';
import type { User, UserCredentials } from '@/services/user/types';

export type State = {
  isAuthenticated: boolean
  user: User | null
}

interface Getters {
  userAttributes: Getter<User | null, State>
}

interface Mutations<S> {
  SET_USER: MutationType<S, User>
  SET_AUTHENTICATED: MutationType<S, { authenticated: boolean }>
}

interface Actions {
  login: Action<State, { credentials: UserCredentials }>
  logout: Action<State, boolean>
  getCurrentUser: Action<State, null>
}

export type AuthGetters = ActionTree<Getters, State>;
export type AuthMutations = Mutations<State>;
export type AuthActions = ActionTree<Actions, State>;
