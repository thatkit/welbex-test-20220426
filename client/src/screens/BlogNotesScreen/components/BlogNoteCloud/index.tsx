import React, { useEffect, useState } from 'react';
import { CardGroup } from 'reactstrap';
import styles from './styles.module.scss';
import { BlogNote } from '../BlogNote';
import { useGlobalState } from '../../globalState';
import { observer } from 'mobx-react-lite';

export const BlogNoteCloud = observer((): JSX.Element => {
  const [state] = useState(useGlobalState());

  useEffect(() => {
    state.initialise();
  }, []);

  return (
    <CardGroup className={styles.cardGroup}>
      {state.getBlogNotes.map((blogNoteData, ind) => {
        return <BlogNote blogNote={blogNoteData} key={ind} />;
      })}
    </CardGroup>
  );
});
