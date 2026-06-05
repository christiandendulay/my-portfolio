import { gql } from 'graphql-request';

export const GET_HOW_I_WORK = gql`
  query GetHowIWork {
    howIWorkCollection(where: { singletonId: "how-i-work" }, limit: 1) {
      items {
        sys {
          id
        }
        singletonId
        title
        subtitle
        principlesCollection(order: [order_ASC]) {
          items {
            sys {
              id
            }
            heading
            description
            order
          }
        }
      }
    }
  }
`;
