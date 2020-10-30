import styled from 'styled-components';

export const NotesContainer = styled.div`
  flex: 1;
  height: 328px;
`;

export const ListContainer = styled.div`
  padding: 0 20px;
  height: 290px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px grey;
  }
  ::-webkit-scrollbar-thumb {
    background: #1890ff;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  font-size: 24px;
`;
