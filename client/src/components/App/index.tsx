import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import styles from './styles.module.scss';
import { Navbar } from '../Navbar';
import { BlogNoteCloud } from '../BlogNoteCloud';
import { BlogNoteModal } from '../BlogNoteModal';

const authorData = 'thatkit';

function App() {
  return (
    <Container className={styles.app}>
      <Navbar data={authorData} />
      <div className={styles.btnWrapper}>
        <BlogNoteModal
          action={{ action: 'create new' }}
          data={{ title: 'none' }}
        />
      </div>
      <BlogNoteCloud />
    </Container>
  );
}

export default App;
