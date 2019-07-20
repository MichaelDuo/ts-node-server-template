import Koa from 'koa';

export default (): Koa.Middleware =>
	async function notFoundHandler(ctx: Koa.Context): Promise<void> {
		ctx.status = 404;
		ctx.body = {
			meta: {
				code: 404,
				message: `404 - Path ${ctx.path} is not found`,
			},
			data: {},
		};
	};
