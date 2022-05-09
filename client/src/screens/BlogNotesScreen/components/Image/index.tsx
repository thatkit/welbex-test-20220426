import React from 'react';
import { CardImg } from 'reactstrap';
import styles from './styles.module.scss';

export const Image = ({ url }: { url: string }) => {
  return <CardImg className={styles.img} alt="image" src={url} top />;
};
