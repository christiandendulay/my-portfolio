import { gql } from 'graphql-request';

export const GET_CONTACT_ME = gql`
  query GetContactMe {
    contactMeCollection(limit: 1, where: { singletonId: "contact-me" }) {
      items {
        singletonId
        sys {
          id
        }
        description
        email
        title
        socialLinksCollection {
          items {
            sys {
              id
            }
            label
            icon {
              url
              title
            }
            url
            platformName
          }
        }
      }
    }
  }
`;
