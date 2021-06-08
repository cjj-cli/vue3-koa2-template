/* eslint-disable @typescript-eslint/no-var-requires */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

exec('cp package.json pm2.json .env ./output').then((...args) => {
  console.log('success', args);
}).catch((e) => {
  console.log('error', e);
});
