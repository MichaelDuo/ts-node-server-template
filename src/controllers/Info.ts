import Koa from 'koa';
export default class Info {
	public static async whoami(ctx: Koa.Context): Promise<any> {
		ctx.body = 'ts-node-server-template';
	}
}
