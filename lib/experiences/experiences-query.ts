import { gql } from 'graphql-request';

export const GET_EXPERIENCES = gql`
  query GetExperiences {
    experiencesCollection(where: { singletonId: "experiences" }, limit: 1) {
      items {
        sys {
          id
        }
        singletonId
        title
        jobExperiencesCollection {
          items {
            sys {
              id
            }
            company
            startDate
            isCurrent
            locationType
            endDate
            role
            description
          }
        }
      }
    }
  }
`;
