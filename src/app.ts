import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import * as routers from './routers';
import accessLog from './middlewares/accessLog';
import responseTime from 'koa-response-time';
import errorHandler from './middlewares/errorHandler';
import notFoundHandler from './middlewares/notFoundHandler';
import bodyDecorator from './middlewares/bodyDecorator';
import graphql from './graphql';

import {koaSwagger} from 'koa2-swagger-ui';
import yamljs from 'yamljs';

const spec = yamljs.load('./docs/swagger-config2.yaml');

export default async function initApp(): Promise<Koa> {
	const app = new Koa();

	app.use(
		koaSwagger({
			routePrefix: '/docs', // host at /swagger instead of default /docs
			swaggerOptions: {
				spec,
			},
		})
	);

	app.use(accessLog())
		.use(responseTime())
		.use(errorHandler());

	app.use(graphql())
		.use(bodyParser())
		.use(bodyDecorator())
		.use(routers.insecure.routes())
		.use(routers.insecure.allowedMethods())
		.use(routers.secure.routes())
		.use(routers.secure.allowedMethods())
		.use(notFoundHandler());

	return app;
}
