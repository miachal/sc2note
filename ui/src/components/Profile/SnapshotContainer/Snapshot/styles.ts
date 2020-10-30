import styled from 'styled-components';

export const SnapshotContainer = styled.div`
  flex-direction: column;
`;

export const SingleUnit = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: row;
  font-size: 12px;
  flex: 1;

  span {
    font-weight: bold;
  }
`;

export const Details = styled.div`
  flex-direction: column;
  margin-top: 3px;
  margin-left: 10px;
  width: 100%;
`;
