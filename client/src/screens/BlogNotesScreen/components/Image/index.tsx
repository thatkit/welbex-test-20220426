import React from 'react';
import { CardImg } from 'reactstrap';
import { checkFileFormat } from '../../../../tools/checkFileFormat';
import styles from './styles.module.scss';
import videoIcon from '../../../../assets/video-icon.webp';

export const Image = ({ url, filename }: { url: string; filename: string }) => {
  return (
    <CardImg
      className={styles.img}
      alt="image"
      src={checkFileFormat(filename) ? url : videoIcon}
      top
    />
  );
};
