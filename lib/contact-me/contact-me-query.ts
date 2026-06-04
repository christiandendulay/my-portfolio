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
      }
    }
  }
`;

export const GET_SOCIAL_LINKS = gql`
  query GetSocialLink {
    contactMeCollection(limit: 1, where: { singletonId: "contact-me" }) {
      items {
        socialLinksCollection {
          items {
            sys {
              id
            }
            label
            url
            platformName
          }
        }
      }
    }
  }
`;
