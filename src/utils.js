import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'http://localhost:8000/graphiql/', // your GraphQL Server 
  });