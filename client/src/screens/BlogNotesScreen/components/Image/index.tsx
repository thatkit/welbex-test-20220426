import React from 'react';
import { CardImg } from 'reactstrap';
import styles from './styles.module.scss';

export const Image = ({ url }: { url: string }) => {
  // # any
  return <CardImg className={styles.img} alt="image" src={url} top />;
};
