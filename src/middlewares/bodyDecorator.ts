import Koa from 'koa';

export default (): Koa.Middleware =>
	async function bodyDecorator(
		ctx: Koa.Context,
		next: Function
	): Promise<void> {
		await next();
		if (!ctx.body) {
			return;
		}
		if (!ctx.body.meta) {
			ctx.body = {
				meta: {
					code: ctx.status,
					message: ctx.message,
				},
				data: ctx.body,
			};
		}
	};
