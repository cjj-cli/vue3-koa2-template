import redis from './Redis';

const Prex = 'session:';

export default {
  get: async (key: string): Promise<any> => {
    try {
      const data = await redis.get(`${Prex}${key}`);
      return JSON.parse(data);
    } catch (error) {
      return error;
    }
  },
  set: async (key: string, sess: string | Record<string, unknown>, maxAge = Number(process.env.REDIS_TTL)): Promise<any> => {
    try {
      const data = await redis.set(`${Prex}${key}`, typeof sess === 'string' ? sess : JSON.stringify(sess), 'EX', maxAge / 1000);
      return data;
    } catch (error) {
      return error;
    }
  },
  destroy: async (key: string): Promise<any> => {
    try {
      await redis.del(`SESSION:${key}`);
      return true;
    } catch (error) {
      return error;
    }
  },
};
