import React from 'react';
import styles from './styles.module.scss';
import { Image } from '../Image';
import { ImageDeleteWrapper } from '../ImageDeleteWrapper';

export const ImageContainer = ({
  action,
  data,
}: {
  action: any;
  data: any;
}) => {
  return (
    <div className={styles.imgContainer}>
      {data.media.map((file: any, ind: number) => {
        return action === 'edit' ? (
          <ImageDeleteWrapper key={ind}>
            <Image blogNoteTitle={data.title} file={file} />
          </ImageDeleteWrapper>
        ) : (
          <Image blogNoteTitle={data.title} file={file} key={ind} />
        );
      })}
    </div>
  );
};
