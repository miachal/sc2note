import styled from 'styled-components';

export const SnapshotContainer = styled.div`
  flex-direction: column;
`;

export const SingleUnit = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  font-size: 12px;
  flex: 1;

  span {
    font-weight: bold;
  }

  div:first-child {
    margin-top: 3px;
  }
`;
