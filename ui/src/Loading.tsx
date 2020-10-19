import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  height: 174px;
  width: 162px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = () => (
  <LoadingContainer>
    <ReactLoading type='spokes' color='#1890ff' />
  </LoadingContainer>
);
