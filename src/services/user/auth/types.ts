import type { Action, ActionTree, Getter } from 'vuex';
import type { User, UserCredentials } from '@/services/user/types';

export type State = {
  isAuthenticated: boolean
  user: User | null
}

interface Getters {
  userAttributes: Getter<User | null, State>
}

interface Actions {
  login: Action<State, { credentials: UserCredentials }>
  logout: Action<State, null>
  getCurrentUser: Action<State, null>
}

export type AuthGetters = ActionTree<Getters, State>;
export type AuthActions = ActionTree<Actions, State>;
