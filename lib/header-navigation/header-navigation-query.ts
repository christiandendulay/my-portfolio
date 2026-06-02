import { gql } from 'graphql-request';

export const GET_HEADER_NAVIGATION = gql`
  query GetHeaderNavigation {
    headerNavigationCollection(limit: 1) {
      items {
        sys {
          id
        }
        title
        navigationItemsCollection(limit: 5) {
          items {
            sys {
              id
            }
            isExternal
            label
            url
          }
        }
      }
    }
  }
`;
