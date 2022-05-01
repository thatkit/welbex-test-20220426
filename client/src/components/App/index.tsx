import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss';
import { Navbar } from '../Navbar';
import { BlogNoteCloud } from '../BlogNoteCloud';

const authorData = 'thatkit';

function App() {
  return (
    <div className={styles.app}>
      <Navbar data={authorData} />
      <BlogNoteCloud />
    </div>
  );
}

export default App;
