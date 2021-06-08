import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
});

instance.interceptors.request.use((data: any) => data);

instance.interceptors.response.use(async (data: any) => {
  const responseData = data.data;
  // const { notifySucess, notifyError, hideErrMsg } = data.config || {};

  // if (responseData.code === -3) {
  //   console.log('-3');
  //   // 未登录或者登录过期，页面清除用户信息并跳转到登录页面
  //   if (window.location.pathname !== '/') {
  //     window.location.href = '/';
  //   }
  // }

  // if (responseData.code === 0) {
  //   if (notifySucess === true) {
  //     notification.success({
  //       message: responseData.message || '操作成功',
  //     });
  //   } else if (typeof notifySucess === 'string') {
  //     notification.success({
  //       message: notifySucess || '操作成功',
  //     });
  //   }
  // } else if (notifyError === true) {
  //   notification.error({
  //     message: responseData.message || '操作失败',
  //   });
  // } else if (typeof notifySucess === 'string') {
  //   notification.error({
  //     message: notifyError || '操作失败',
  //   });
  // } else if (hideErrMsg !== true) {
  //   console.log('responseData.message', responseData.message);

  //   message.error(responseData.message || '请求失败');
  // }

  return responseData;
}, (err: any) => {
  if (!axios.isCancel(err)) {
    // message.error(err.message || '请求异常');
  }
  return Promise.resolve(err);
});

export const { get, post } = instance;

export default instance;
