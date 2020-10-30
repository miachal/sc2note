import React, {
  useState,
  ReactElement,
  useEffect,
  SyntheticEvent,
  RefObject,
} from 'react';
import styled from 'styled-components';
import { Popover, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const ButtonWithoutBorder = styled(Button)`
  border: 0;
`;

const IconSpan = styled.span`
  width: 32px;
  height: 32px;
  position: relative;
  top: -10px;
  font-size: 24px;
`;

const icons = ['💩', '👍', '👎', '🧠', '👣', '💨', '🔥', '🙈'];

interface IIConPicker {
  iconRef: any;
}

const IconPicker: React.FC<IIConPicker> = ({ iconRef }) => {
  const [icon, setIcon] = useState('💩');

  useEffect(() => {
    iconRef.current = icon;
  }, [icon]);

  return (
    <Popover
      content={
        <div>
          {icons.map((icon) => (
            <ButtonWithoutBorder onClick={() => setIcon(icon)}>
              {icon}
            </ButtonWithoutBorder>
          ))}
        </div>
      }
      trigger='hover'
    >
      <ButtonWithoutBorder>
        <IconSpan>{icon}</IconSpan>
      </ButtonWithoutBorder>
    </Popover>
  );
};

export default IconPicker;
