import React from 'react';
import { CardImg } from 'reactstrap';
import styles from './styles.module.scss';

export const Image = ({ file }: { file: any }) => {
  // # any
  console.log(file.url)
  return (
    <CardImg
      className={styles.img}
      alt='image'
      src={file.url}
      top
    />
  );
};
