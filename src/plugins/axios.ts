import type { Inject } from '@nuxt/types/app';
import axios from 'axios';

export const $axios = axios.create({
  baseURL: '/api/'
});

// fck nuxt
// @ts-ignore
export default function (_, inject: Inject) {
  inject('api', $axios);
}
