import http from 'http';
import bootstrap from './bootstrap';
import app from './app';
import logger from './utils/logger';
import config from 'config';
import handleShuntdown from './utils/handleShutdown';

const port = config.get('PORT');

async function main(): Promise<any> {
	await bootstrap();
	const server = http.createServer(app.callback());
	server.keepAliveTimeout = 120 * 1000;
	handleShuntdown(server, app);
	server.listen(port, (): void => {
		logger.info(`App listening on port: ${port}`);
	});
}

main().catch((error: Error): void => {
	logger.error({
		message: error.message,
		stack: error.stack,
	});
	logger.info('Shutdown with error');
	process.exit(1);
});
