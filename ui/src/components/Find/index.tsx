import React, { useState } from 'react';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import { FindContainer, FindSelect, SearchButton } from './styles';

interface FindProps {
  findSingle(input: Array<string>): void;
}

export default ({ findSingle }: FindProps) => {
  const [input, setInput] = useState<Array<string>>([]);

  return (
    <FindContainer>
      <FindSelect
        mode='tags'
        tokenSeparators={[',']}
        onChange={(tags) => setInput(tags as Array<string>)}
        value={input}
      ></FindSelect>
      <SearchButton
        type='primary'
        icon={<UserOutlined />}
        onClick={() => findSingle(input)}
      />
      <SearchButton disabled type='primary' icon={<TeamOutlined />} />
    </FindContainer>
  );
};
