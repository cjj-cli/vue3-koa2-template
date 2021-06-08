import * as Redis from 'ioredis';

const option = {
  port: Number(process.env.REDIS_PORT),
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  ttl: Number(process.env.REDIS_TTL),
};

const redis = new Redis(option);

redis.on('connect', () => {
  console.log('redis connected');
});

redis.on('error', (e) => {
  console.log('redis error', e);
});

export default redis;
