import { gql } from '@apollo/client';

export const FIND_IDS = gql`
  query find($names: [String]!) {
    searchIds(names: $names) {
      id
      name
    }
  }
`;
