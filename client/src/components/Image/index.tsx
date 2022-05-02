import React from 'react';
import { CardImg } from 'reactstrap';
import styles from './styles.module.scss';

export const Image = ({ file }: { file: any }) => {
  // # any
  return (
    <CardImg
      className={styles.img}
      alt={file.fileName}
      src="https://picsum.photos/seed/picsum/200/300"
      top
    />
  );
};
