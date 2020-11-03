import Router from 'koa-router';
import InfoController from './controllers/InfoController';

const insecure = new Router();
const secure = new Router();

insecure.get('/whoami', InfoController.whoami);

export {insecure, secure};
