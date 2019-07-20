import http from 'http';
import bootstrap from './bootstrap';
import app from './app';
import logger from './utils/logger';

const port = 3000;

async function main(): Promise<any> {
	await bootstrap();
	const server = http.createServer(app.callback());
	server.listen(port, (): void => {
		logger.info(`App listening on port: ${port}`);
	});
}

main();
