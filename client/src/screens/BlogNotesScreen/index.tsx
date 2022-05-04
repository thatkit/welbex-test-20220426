import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';
import { useGlobalState } from '../../state/globalState';
import { Navbar } from './components/Navbar';
import { BlogNoteCloud } from './components/BlogNoteCloud';
import { BlogNoteModal } from './components/BlogNoteModal';
import { useAuthState } from '../../state/authState';

export const BlogNotesScreen = observer((): JSX.Element => {
  const [state] = useState(useGlobalState());

  useEffect(() => {
    state.setBlogNotes();
  }, []);

  return (
    <Container className={styles.cnt}>
      <Navbar data={'hard coded'} />
      <div className={styles.btnWrapper}>
        <BlogNoteModal action={{ action: 'create' }} data={{}} />
      </div>
      <BlogNoteCloud data={state.getBlogNotes} />
    </Container>
  );
});
