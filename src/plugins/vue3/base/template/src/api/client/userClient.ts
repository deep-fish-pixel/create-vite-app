import type { AxiosResponse } from 'axios';
import client from '@/api/helper/client';
import type { HttpResponse } from '@/api/helper/http.define';
import type { UserModel } from '@/api/model/userModel';

export const login = function (params: { username: string; password: string }) {
  return client.post<AxiosResponse<HttpResponse<{ account: string }>>>(
    '/api/user/login',
    params
  );
};

export const getUser = function (userId: string) {
  return client.get<AxiosResponse<HttpResponse<UserModel>>>(
    `/api/user/${userId}`
  );
};
