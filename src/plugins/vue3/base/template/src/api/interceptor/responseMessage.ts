import type { AxiosError, AxiosResponse } from 'axios';
import type { AxiosInterceptors } from '@/api/helper/http.define';
import { ResultCodeEnum } from '@/api/helper/http.define';

export default function responseMessage(interceptors: AxiosInterceptors) {
  interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.data.resultCode === ResultCodeEnum.AUTH_FAILED) {
        window.location.hash = '/login';
        return Promise.reject(response.data.resultDesc);
      }
      if (
        !response.config.noToast &&
        response.data.resultCode &&
        response.data.resultCode === ResultCodeEnum.ERROR
      ) {
        // 此处替换为UI提示的错误信息
        console.error(response.data.resultDesc);
        return Promise.reject(response.data.resultDesc);
      }
      return response;
    },
    async (error: AxiosError) => {
      console.error('网络错误，请稍后再试');
      return Promise.reject(error);
    }
  );
}
