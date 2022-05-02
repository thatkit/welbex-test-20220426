import React from 'react';
import { CardImg } from 'reactstrap';
import { useGlobalState } from '../../screens/globalState';
import styles from './styles.module.scss';

export const Image = ({
  blogNoteTitle,
  file,
}: {
  blogNoteTitle: string;
  file: any;
}) => {
  // # any
  return (
    <CardImg
      className={styles.img}
      alt="image"
      src={useGlobalState().fetchPresignedUrl(blogNoteTitle, file.fileName)}
      top
    />
  );
};
