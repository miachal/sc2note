import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin-top: 10px;
  width: 162px;
`;

const Frame = styled.div<{ active?: boolean }>`
  border: 5px solid ${(({ active }) => active ? `#1890ff` : `#000`)};
  &:hover {
    border: 5px solid ${(({ active }) => active ? '#1890ff' : `#91d5ff`)};
  }
`;

const MiniProfile: React.FC<{ player: any, toggleProfile: any, active?: boolean }> = ({ player, toggleProfile, active = false }) => {
  const { rankedftwId, summary: { displayName, portrait } } = player || {};
  return (
    <Box>
      <div>{displayName}</div>
      <Frame active={active} onClick={() => toggleProfile(rankedftwId)}>
        <div><img src={portrait} /></div>
      </Frame>
    </Box>
  );
};

export default MiniProfile;
