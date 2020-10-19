import React, { useState } from 'react';
import styled from 'styled-components';
// import notfound from 'img/avatars/notfound.png';

const Box = styled.div`
  margin-top: 10px;
  width: 162px;
`;

const Frame = styled.div<{ active?: boolean }>`
  width: 152px;
  height: 152px;
  border: 5px solid ${({ active }) => (active ? `#1890ff` : `#000`)};
  &:hover {
    border: 5px solid ${({ active }) => (active ? '#1890ff' : `#91d5ff`)};
  }
`;

const MiniProfile: React.FC<{
  player: any;
  toggleProfile: any;
  active?: boolean;
}> = ({ player, toggleProfile, active = false }) => {
  let {
    rankedftwId,
    summary: { displayName, portrait },
  } = player || {};
  console.log('portrait: ', portrait);
  return (
    <Box>
      <div>{displayName}</div>
      <Frame active={active} onClick={() => toggleProfile(rankedftwId)}>
        <div>
          <img
            src={portrait}
            // onError={(e) => {
            //   e.target.src = '/img/avatars/notfound.png';
            // }}
          />
        </div>
      </Frame>
    </Box>
  );
};

export default MiniProfile;
