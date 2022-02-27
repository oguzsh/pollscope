import { gql } from '@apollo/client';

export const ALL_POLLS = gql`
  query allPolls {
    polls {
      id
      question
      choices {
        choiceText
        voteCount
      }
    }
  }
`;
