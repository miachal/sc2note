import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingContainer } from './styles';

export default () => (
  <LoadingContainer>
    <ReactLoading type='spokes' color='#1890ff' />
  </LoadingContainer>
);
