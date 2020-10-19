import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
  margin: 10px 10px 0 10px;
  width: 162px;
`;

export const ThumbnailFrame = styled.div<{ active?: boolean }>`
  background-image: url(/img/avatars/notfound.png);
  width: 162px;
  height: 162px;
  border: 5px solid ${({ active }) => (active ? '#1890ff' : '#000')};
  &:hover {
    border: 5px solid ${({ active }) => (active ? '#1890ff' : '#91d5ff')};
  }
`;
