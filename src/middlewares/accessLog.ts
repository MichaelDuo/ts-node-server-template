import Koa from 'koa';
import logger from '../utils/logger';

export default (): Koa.Middleware =>
	async function accessLog(ctx: Koa.Context, next: Function): Promise<void> {
		logger.info({
			message: `<-- ${ctx.method} ${ctx.path}`,
		});
		try {
			await next();
		} finally {
			logger.info({
				message: `--> ${ctx.method} ${ctx.status} ${ctx.path} ${ctx.length}`,
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
			});
		}
	};
