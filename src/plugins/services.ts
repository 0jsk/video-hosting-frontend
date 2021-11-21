import type { Plugin } from '@nuxt/types/app';
import { createServices } from '@/services';

const servicesPlugin: Plugin = (_, inject) => {
  inject('services', createServices());
};

export default servicesPlugin;
