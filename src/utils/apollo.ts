import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

const TOKEN = process.env.CONTENTFUL_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE;
const URI = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const http = new HttpLink({
  uri: URI,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
  fetch: (data, opts) => fetch(data, { ...opts, cache: "no-store" }),
});

const link = ApolloLink.from([http]);

const cache = new InMemoryCache({ resultCaching: false });

const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;
