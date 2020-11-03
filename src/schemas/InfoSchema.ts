import {makeExecutableSchema} from '@graphql-tools/schema';
import InfoService from '../services/InfoService';
import User from '../models/user';

const typeDef = `
    type Query {
        whoami: String!
        date: String!
    } 
`;

const resolvers = {
	Query: {
		whoami: async function(): Promise<string> {
			return InfoService.whoami();
		},
		date: async function(): Promise<string> {
			return InfoService.date();
		},
	},
};

const schema = makeExecutableSchema({
	typeDefs: typeDef,
	resolvers: resolvers,
});

export default schema;
