import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import styles from './styles.module.scss';
import { Navbar } from './components/Navbar';
import { BlogNoteCloud } from './components/BlogNoteCloud';
import { BlogNoteModal } from './components/BlogNoteModal';
import { observer } from 'mobx-react-lite';
import { useGlobalState } from '../globalState';

export const BlogNotesScreen = observer((): JSX.Element => {
  const [state] = useState(useGlobalState());

  return (
    <Container className={styles.app}>
      <Navbar data={state.getUsername} />
      <div className={styles.btnWrapper}>
        <BlogNoteModal action={{ action: 'create' }} data={{}} />
      </div>
      <BlogNoteCloud data={state.getBlogNotes} />
    </Container>
  );
});
