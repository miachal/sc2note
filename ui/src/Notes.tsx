import React, { useState, SyntheticEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Popover, Button, Skeleton, List, Avatar } from 'antd';
import { Input } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import IconPicker from './IconPicker';
import NotesInput from './NotesInput';
import { useQuery, useMutation, gql } from '@apollo/client';

const NotesContainer = styled.div`
  flex: 1;
  height: 328px;
`;

const ListContainer = styled.div`
  padding: 0 20px;
  height: 290px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px grey;
  }
  ::-webkit-scrollbar-thumb {
    background: #1890ff;
  }
`;

const GET_NOTES = gql`
  query q($id: String!) {
    getNotes(playerIds: [$id]) {
      icon
      note
      created
    }
  }
`;

const ADD_NOTE = gql`
  mutation m($id: String!, $icon: String, $description: String) {
    addNote(note: { players: [$id], icon: $icon, note: $description }) {
      _id
      icon
      note
      created
    }
  }
`;

const IconAvatar = styled.div`
  width: 32px;
  height: 32px;
  font-size: 24px;
`;

const Notes: React.FC<{ id: String }> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_NOTES, { variables: { id } });
  const [addNote] = useMutation(ADD_NOTE, {
    update(cache: any, { data: { addNote } }) {
      const { getNotes } = cache.readQuery({
        query: GET_NOTES,
        variables: { id },
      });
      cache.writeQuery({
        query: GET_NOTES,
        variables: { id },
        data: { getNotes: [...getNotes, addNote] },
      });
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error :(</div>;
  }

  const handleAddNote = ({ icon, note }: { icon: String; note: String }) => {
    addNote({
      variables: {
        id,
        icon,
        description: note,
      },
    });
  };

  return (
    <NotesContainer>
      <ListContainer>
        <List
          itemLayout='horizontal'
          dataSource={[
            ...data.getNotes,
          ].sort((a: { created: number }, b: { created: number }): any =>
            a.created - b.created < 0 ? 1 : -1
          )}
          renderItem={(item: any) => (
            <List.Item
              actions={[
                <a key='list-loadmore-more'>
                  <DeleteOutlined />
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={<IconAvatar>{item.icon}</IconAvatar>}
                  title={new Date(+item.created).toLocaleString()}
                  description={item.note}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </ListContainer>
      <NotesInput handleAddNote={handleAddNote} />
    </NotesContainer>
  );
};

export default Notes;
