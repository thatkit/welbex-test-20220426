import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import styles from './styles.module.scss';
import { Navbar } from '../../components/Navbar';
import { BlogNoteCloud } from '../../components/BlogNoteCloud';
import { BlogNoteModal } from '../../components/BlogNoteModal';
import { observer } from 'mobx-react-lite';
import { useGlobalState } from '../globalState';

const authorData = 'thatkit';

export const BlogNotesScreen = observer((): JSX.Element => {
  const [state] = useState(useGlobalState());

  console.log(state.getBlogNotes)
  
  return (
    <Container className={styles.app}>
      <Navbar data={authorData} />
      <div className={styles.btnWrapper}>
        <BlogNoteModal
          action={{ action: 'create' }}
          data={{}}
        />
      </div>
      <BlogNoteCloud data={state.getBlogNotes} />
    </Container>
  );
})
