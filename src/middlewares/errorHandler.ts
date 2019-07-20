import Koa from 'koa';
import logger from '../utils/logger';

export default (): Koa.Middleware =>
	async function errorHandler(
		ctx: Koa.Context,
		next: Function
	): Promise<void> {
		try {
			await next();
		} catch (e) {
			ctx.status = 500;
			ctx.body = {
				meta: {code: 500, message: '500: Internal Server Error'},
				data: {},
			};

			const errObj = {
				message: e.stack || e.message || e.errors,
				request: {
					status: ctx.status,
					userAgent: ctx.get('user-agent'),
					referer: ctx.get('referer'),
					requestMethod: ctx.method,
					requestUrl: ctx.href,
					remoteIp: ctx.ip,
				},
				response: {
					body: ctx.body,
					latency: ctx.response.get('X-Response-Time'),
					size: ctx.length,
				},
			};

			logger.error(errObj);
		}
	};
