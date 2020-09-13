import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

// This allows us to use GraphQL on the following REST API
// (API key passed for authorization)
const restLink = new RestLink({
    uri: 'https://newsapi.org/v2/',
    headers: {
        Authorization: 'be03e88bcece4c3d8c8f0025ef2aba0c',
    },
});
// Apollo Client is a state management library that will automatically request and
// cache requested data; InMemoryCache caches the GraphQL calls in local memory (AsyncStorage?)
export const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
});