import cors from '@koa/cors';
import Koa from 'koa';
import koaBody from 'koa-body';

async function start() {
  const koa = new Koa();

  koa.use(cors());
  koa.use(koaBody());
}

start();
