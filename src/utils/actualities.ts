import { gql } from "@apollo/client";
import apolloClient from "./apollo";

interface Collection<T> {
  items: T[];
}
interface Actuality {
  title: string;
  date: Date | null;
  description: {
    json: object;
  } | null;
  location: {
    lat: number;
    lon: number;
  } | null;
  mediaCollection: Collection<Media>;
}
interface Query {
  actualityCollection: Collection<Actuality>;
}

interface Media {
  title: string;
  description: string;
  contentType: string;
  url: string;
}

export async function getAllActualities() {
  const { data } = await apolloClient.query<Query>({
    query: gql`
      query {
        actualityCollection {
          items {
            title
            date
            description {
              json
            }
            location {
                lat
                lon
            }
            mediaCollection {
              items {
                title
                description
                contentType
                url
              }
            }
          }
        }
      }
    `,
  });
  return data.actualityCollection.items;
}
