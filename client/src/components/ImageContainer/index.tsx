import React from 'react';
import styles from './styles.module.scss';
import { Image } from '../Image';

export const ImageContainer = ({ media }: { media: any }) => {
  return (
    <div className={styles.imgContainer}>
      {media.map((file: any, ind: number) => (
        <Image file={file} key={ind} />
      ))}
    </div>
  );
};
