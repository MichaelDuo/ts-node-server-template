import Router from 'koa-router';
import Info from './controllers/Info';

const insecure = new Router();
const secure = new Router();

insecure.get('/whoami', Info.whoami);

export {insecure, secure};
