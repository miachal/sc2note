import { gql } from '@apollo/client';

export const GET_NOTES = gql`
  query get($id: String!) {
    getNotes(playerIds: [$id]) {
      icon
      note
      created
    }
  }
`;
