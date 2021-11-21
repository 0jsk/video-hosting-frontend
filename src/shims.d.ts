import type { createServices } from '@/services';

type Services = ReturnType<typeof createServices>;

declare module 'vue/types/vue' {
  interface Vue {
    $services: Services
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $services: Services
  }

  interface Context {
    $services: Services
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $services: Services
  }
}
