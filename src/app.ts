import Koa from 'koa';
import * as routers from './routers';

const app = new Koa();

app.use(routers.insecure.routes())
	.use(routers.insecure.allowedMethods())
	.use(routers.secure.routes())
	.use(routers.secure.allowedMethods());

export default app;
