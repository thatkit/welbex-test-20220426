import React from 'react';
import styles from './styles.module.scss';
import { Image } from '../Image';
import { ImageDeleteWrapper } from '../ImageDeleteWrapper';

export const ImageContainer = ({
  action,
  media,
}: {
  action: any;
  media: any;
}) => {
  return (
    <div className={styles.imgContainer}>
      {media.map((file: any, ind: number) => {
        return action === 'edit' ? (
          <ImageDeleteWrapper>
            <Image file={file} key={ind} />
          </ImageDeleteWrapper>
        ) : (
          <Image file={file} key={ind} />
        );
      })}
    </div>
  );
};
