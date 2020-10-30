import React, { useState, useRef, ChangeEvent, SyntheticEvent } from 'react';
import { Submit, InputContainer } from './styles';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import IconPicker from './IconPicker';

interface InputProps {
  addNote: ({ icon, note }: { icon: string; note: string }) => void;
}

export default ({ addNote }: InputProps) => {
  const [note, setNote] = useState<string>('');
  const icon = useRef<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setNote(e.target.value);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addNote({
      icon: icon.current,
      note,
    });
    setNote('');
  };

  return (
    <InputContainer>
      <IconPicker iconRef={icon} />
      <Input
        size='small'
        value={note}
        onChange={handleInput}
        onPressEnter={handleSubmit}
      />
      <Submit onClick={handleSubmit}>
        <PlusOutlined />
      </Submit>
    </InputContainer>
  );
};
