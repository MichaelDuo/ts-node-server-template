import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import * as routers from './routers';

const app = new Koa();

app.use(bodyParser())
	.use(routers.insecure.routes())
	.use(routers.insecure.allowedMethods())
	.use(routers.secure.routes())
	.use(routers.secure.allowedMethods());

export default app;
