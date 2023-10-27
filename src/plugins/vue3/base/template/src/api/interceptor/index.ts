import type { AxiosInterceptors } from '@/api/helper/http.define';
//<---+import--->
import useResponseMessageInterceptor from './responseMessage';

export default function setupInterceptors(interceptors: AxiosInterceptors) {
  //<---+setup--->
  useResponseMessageInterceptor(interceptors);
}
