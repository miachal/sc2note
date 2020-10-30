import React, { useState, useEffect, MutableRefObject } from 'react';
import { Popover } from 'antd';
import { Box, Icon } from './styles';

const availableIcons = ['💩', '👍', '👎', '🧠', '👣', '💨', '🔥', '🙈'];

interface IconPickerProps {
  iconRef: MutableRefObject<string>;
}

export default ({ iconRef }: IconPickerProps) => {
  const [icon, setIcon] = useState<string>(availableIcons[0]);

  useEffect(() => {
    iconRef.current = icon;
  }, [icon, iconRef]);

  return (
    <Popover
      content={
        <div>
          {availableIcons.map((icon) => (
            <Box onClick={() => setIcon(icon)}>{icon}</Box>
          ))}
        </div>
      }
      trigger='hover'
    >
      <Box>
        <Icon>{icon}</Icon>
      </Box>
    </Popover>
  );
};
