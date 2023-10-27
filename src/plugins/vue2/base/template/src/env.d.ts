declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<object, object, never>;

  export default component;
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    noToast?: boolean;
  }
}
export const end: string;
