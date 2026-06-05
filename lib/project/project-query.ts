import { gql } from 'graphql-request';

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projectCollection(order: sys_publishedAt_DESC) {
      items {
        sys {
          id
        }
        tags
        repoUrl
        liveDemo
        thumbnail {
          url
          title
        }
        title
        slug
        description {
          json
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String!) {
    projectCollection(where: { slug: $slug }, limit: 1) {
      items {
        sys {
          id
        }
        liveDemo
        tags
        repoUrl
        thumbnail {
          url
          title
        }
        title
        slug
        description {
          json
        }
      }
    }
  }
`;

export const GET_ALL_SLUGS = gql`
  query GetAllSlugs {
    projectCollection {
      items {
        slug
      }
    }
  }
`;
