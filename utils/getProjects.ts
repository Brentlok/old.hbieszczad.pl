import { GraphQLClient } from 'graphql-request';

const query = `
{
  allProjects(orderBy: year_DESC) {
    title
    year
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

export function getProjects() {
  const endpoint = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query);
}
