import React from 'react';
import { CardImg } from 'reactstrap';
import styles from './styles.module.scss';

export const Image = ({ url, filename }: { url: string; filename: string }) => {
  return <CardImg className={styles.img} alt="image" src={url} top />;
};
