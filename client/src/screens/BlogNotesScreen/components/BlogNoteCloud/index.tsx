import React, { useEffect, useState } from 'react';
import { CardGroup } from 'reactstrap';
import styles from './styles.module.scss';
import { BlogNote } from '../BlogNote';
import { useGlobalState } from '../../globalState';
import { observer } from 'mobx-react-lite';

export const BlogNoteCloud = observer(() => {
  const [state] = useState(useGlobalState());

  useEffect(() => {
    state.setBlogNotes();
  }, []);

  return (
    <CardGroup className={styles.cardGroup}>
      {state.getBlogNotes.map((blogNoteData, ind) => {
        return <BlogNote data={blogNoteData} key={ind} />;
      })}
    </CardGroup>
  );
});
