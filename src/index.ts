import http from 'http';
import bootstrap from './bootstrap';
import app from './app';

const port = 3000;

async function main(): Promise<any> {
	await bootstrap();
	const server = http.createServer(app.callback());
	server.listen(port, (): void => {
		console.log(`App listening on port: ${port}`);
	});
}

main();
