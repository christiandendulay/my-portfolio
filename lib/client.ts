import { GraphQLClient } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT || 'master'}`;

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export const previewClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_TOKEN}`,
  },
});
