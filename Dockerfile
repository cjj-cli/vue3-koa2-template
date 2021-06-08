# BUILDING
FROM node:14.5.0-alpine AS builder

WORKDIR /web

COPY . ./

# 在国内打开下面一行加速
RUN npm config set registry https://registry.npm.taobao.org/ && npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass

RUN npm install && \
  npm run release

RUN rm -rf node_modules

WORKDIR /web/output

RUN npm install -g pm2

RUN npm install --production

CMD ["pm2-runtime", "pm2.json"]
