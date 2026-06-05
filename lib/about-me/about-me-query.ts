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
        profilePicture {
          url
          title
        }
      }
    }
  }
`;

export const GET_RESUME = gql`
  query Resume {
    assetCollection(where: { title: "Resume" }, limit: 1) {
      items {
        url
        title
      }
    }
  }
`;
