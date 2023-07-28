import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";

const TOKEN = process.env.CONTENTFUL_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE;
const URI = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const http = new HttpLink({
  uri: URI,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const link = ApolloLink.from([http]);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;
