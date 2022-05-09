import React from 'react';
import { CardImg } from 'reactstrap';
import { useGlobalState } from '../../globalState';
import styles from './styles.module.scss';

export const Image = ({
  url,
  blogNoteTitle,
  file,
}: {
  url: string;
  blogNoteTitle: string;
  file: any;
}) => {
  // # any
  return (
    <CardImg
      className={styles.img}
      alt="image"
      src={url}
      top
    />
  );
};
