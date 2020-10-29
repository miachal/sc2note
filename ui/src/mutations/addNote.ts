import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
  mutation add($id: String!, $icon: String, $description: String) {
    addNote(note: { players: [$id], icon: $icon, note: $description }) {
      _id
      icon
      note
      created
    }
  }
`;
