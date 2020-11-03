import mongoose from 'mongoose';
import config from 'config';

export default async function initMongoDB(): Promise<void> {
	return new Promise((resolve, reject): void => {
		mongoose.connect(config.get('mongodb.uri'), {
			useNewUrlParser: true,
		});
		const db = mongoose.connection;
		db.once('open', (): void => resolve());
		db.once('error', (err): void => reject(err));
		db.on(
			'error',
			console.error.bind(console, 'MongoDB connection error:')
		);
	});
}
