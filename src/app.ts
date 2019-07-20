import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import * as routers from './routers';
import accessLog from './middlewares/accessLog';
import responseTime from 'koa-response-time';
import errorHandler from './middlewares/errorHandler';
import notFoundHandler from './middlewares/notFoundHandler';

const app = new Koa();

app.use(accessLog())
	.use(responseTime())
	.use(errorHandler())
	.use(bodyParser())
	.use(routers.insecure.routes())
	.use(routers.insecure.allowedMethods())
	.use(routers.secure.routes())
	.use(routers.secure.allowedMethods())
	.use(notFoundHandler());

export default app;
