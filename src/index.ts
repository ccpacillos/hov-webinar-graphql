import cors from '@koa/cors';
import Koa from 'koa';
import koaBody from 'koa-body';
import logger from './lib/logger';

async function start() {
  const app = new Koa();

  app.use(cors());
  app.use(koaBody());

  await new Promise((resolve) =>
    app.listen({ port: 8000 }, () => {
      logger.info('🚀 Server running at port 8000');
      resolve;
    }),
  );
}

start();
