import { GraphQLClient } from 'graphql-request';
import { Context } from '../context';

const query = `
{
  description {
    data
  }
  allProjects(orderBy: date_DESC) {
    id
    title
    date
    description
    technologies
    image {
      url
    }
    linkName
    linkHref
    linkIcon
    github
  }
}`;

export function getData(): Promise<Context> {
  const endpoint = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query);
}
