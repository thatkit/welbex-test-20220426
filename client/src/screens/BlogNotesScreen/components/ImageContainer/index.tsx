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
      {data.map((url: any, ind: number) => {
        // console.log('url:', url.url)
        return action === 'edit' ? (
          <ImageDeleteWrapper key={ind}>
            <Image url={url.url} />
          </ImageDeleteWrapper>
        ) : (
          <Image url={url.url} key={ind} />
        );
      })}
    </div>
  );
};
