import React, { useRef, useState, SyntheticEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import IconPicker from './IconPicker';

const ButtonWithoutBorder = styled(Button)`
  border: 0;
`;

const InputRow = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;

const NotesInput: React.FC<{ handleAddNote: any }> = ({ handleAddNote }) => {
  const [note, setNote] = useState('');
  const icon = useRef();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setNote(e.target.value);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Wyslano!');
    handleAddNote({
      icon: icon.current,
      note,
    });
    setNote('');
  };

  return (
    <InputRow>
      <IconPicker iconRef={icon} />
      <Input
        size='small'
        value={note}
        onChange={handleInput}
        onPressEnter={handleSubmit}
      />
      <ButtonWithoutBorder onClick={handleSubmit}>
        <PlusOutlined />
      </ButtonWithoutBorder>
    </InputRow>
  );
};

export default NotesInput;
