import * as Koa from 'koa';
import * as dotenv from 'dotenv';

dotenv.config();
const { PORT } = process.env;

export const app = new Koa();

export const server = app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}`));
