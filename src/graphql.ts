import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import {stitchSchemas} from '@graphql-tools/stitch';
import InfoSchema from './schemas/InfoSchema';
import postSchema from './schemas/postsSchema';

export default (): Koa.Middleware =>
	mount(
		'/graphql',
		graphqlHTTP({
			schema: stitchSchemas({
				subschemas: [InfoSchema, postSchema],
			}),
			graphiql: true,
		})
	);
