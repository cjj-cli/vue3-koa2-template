import { post } from '@/utils/axios';
import commonHandle from '@/api/commonHandle';

interface LoginParams {
  name: string,
  password: string
}

export function loginApi(params: LoginParams, options?: CallBackOptions): Promise<any> {
  const promiseRes = post('/api/login', params);
  commonHandle(promiseRes, options);
  return promiseRes;
}

export const a = 1;
