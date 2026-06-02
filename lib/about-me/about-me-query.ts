import { gql } from 'graphql-request';

export const GET_ABOUT_ME = gql`
  query AboutMe {
    aboutMeCollection(where: { singletonId: "about-me" }, limit: 1) {
      items {
        sys {
          id
        }
        name
        role
        bio
        yearsOfExperience
        coreStack
        specializations
        cms
        headless
      }
    }
  }
`;
