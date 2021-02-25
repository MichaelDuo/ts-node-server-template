import Koa from 'koa';
import InfoService from '../services/InfoService';

export default class Info {
	// GET /whoami
	public static async whoami(ctx: Koa.Context): Promise<any> {
		ctx.body = InfoService.whoami();
	}
}
