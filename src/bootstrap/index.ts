import initMongoDB from './initMongodb';

export default async function bootstrap(): Promise<any> {
	await initMongoDB();
	return;
}
