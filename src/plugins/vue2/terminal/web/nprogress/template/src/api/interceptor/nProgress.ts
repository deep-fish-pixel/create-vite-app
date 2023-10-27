import type { AxiosError, AxiosResponse, } from 'axios';
import type { AxiosInterceptors, } from '@/api/helper/http.define';
import MultiNProgress from '@/router/helper/MultiNProgress';

export default function nProgress(interceptors: AxiosInterceptors) {
  interceptors.request.use((config) => {
    MultiNProgress.start();
    return { ...config, };
  });
  interceptors.response.use(
    (response: AxiosResponse) => {
      MultiNProgress.done();
      return response;
    },
    async (error: AxiosError) => {
      MultiNProgress.done();
      return Promise.reject(error);
    }
  );
}
