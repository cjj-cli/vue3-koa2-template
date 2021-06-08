import { get } from '@/utils/axios';
import commonHandle from '@/api/commonHandle';

interface GetSignApiPrams {
  a: number
}

export function getSignApi(params: GetSignApiPrams, options?: CallBackOptions): Promise<any> {
  const promiseRes = get('/api/getToken', {
    params,
  });
  commonHandle(promiseRes, options);
  return promiseRes;
}

export const a = 1;
