import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import styles from './styles.module.scss';
import { Navbar } from './components/Navbar';
import { BlogNoteCloud } from './components/BlogNoteCloud';
import { BlogNoteModal } from './components/BlogNoteModal';

export const BlogNotesScreen = (): JSX.Element => {
  return (
    <Container className={styles.cnt}>
      <Navbar />
      <div className={styles.btnWrapper}>
        <BlogNoteModal action={{ action: 'create' }} data={{}} />
      </div>
      <BlogNoteCloud />
    </Container>
  );
};
