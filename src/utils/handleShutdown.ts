import {Server} from 'http';
import Koa from 'koa';
import logger from './logger';

function handleExit(server: Server, app: Koa): () => void {
	return (): void => {
		logger.info('Signal received - application starts shutdown');

		if (!app.context.isTerminating) {
			// Let everything know that we wish to exit gracefully
			// eslint-disable-next-line no-param-reassign
			app.context.isTerminating = true;

			server.close(
				async (): Promise<void> => {
					logger.info('Koa has gracefully shutdown');
					logger.info('Application has gracefully shutdown');
					process.exit();
				}
			);
		}
	};
}

function handleShutdown(server: Server, app: Koa): void {
	process.on('SIGINT', handleExit(server, app));
	process.on('SIGTERM', handleExit(server, app));
}

export = handleShutdown;
