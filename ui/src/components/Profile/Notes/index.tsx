import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_NOTE } from '../../../mutations';
import { GET_NOTES } from '../../../queries';
import { Note } from '../../../types';
import { Avatar, NotesContainer, ListContainer } from './styles';
import { Skeleton, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Input from './Input';

interface NotesData {
  getNotes: Array<Note>;
}

interface NotesVars {
  id: string;
}

interface NotesProps {
  id: string;
}

export default ({ id }: NotesProps) => {
  const { loading, error, data } = useQuery<NotesData, NotesVars>(GET_NOTES, {
    variables: { id },
  });

  const [addNote] = useMutation<Note>(ADD_NOTE, {
    update(cache, { data: { addNote } }) {
      const notes = cache.readQuery<NotesData>({
        query: GET_NOTES,
        variables: { id },
      });
      cache.writeQuery({
        query: GET_NOTES,
        variables: { id },
        data: { getNotes: [...notes?.getNotes, addNote] },
      });
    },
  });

  const handleAddNote = ({ icon, note }: { icon: string; note: string }) => {
    addNote({
      variables: {
        id,
        icon,
        description: note,
      },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <NotesContainer>
      <ListContainer>
        <List
          itemLayout='horizontal'
          dataSource={[...data?.getNotes].sort((a: Note, b: Note) =>
            a.created - b.created < 0 ? 1 : -1
          )}
          renderItem={(item: Note) => (
            <List.Item actions={[<DeleteOutlined />]}>
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={<Avatar>{item.icon}</Avatar>}
                  title={new Date(+item.created).toLocaleString()}
                  description={item.note}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </ListContainer>
      <Input addNote={handleAddNote} />
    </NotesContainer>
  );
};
