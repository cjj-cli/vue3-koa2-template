export default (promiseRes: Promise<any>, options?: CallBackOptions): void => {
  promiseRes.then((result: any) => {
    if (result.code === 0) {
      if (options && options.successCb) {
        options.successCb(result.data);
      }
    } else if (options && options.errorCb) {
      options.errorCb();
    }

    if (options && options.completeCb) {
      options.completeCb(result);
    }
  }).catch((e: any) => {
    if (options && options.failCb) {
      options.failCb(e);
    }
  });
};
