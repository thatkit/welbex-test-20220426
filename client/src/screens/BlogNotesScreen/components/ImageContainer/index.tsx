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
}): JSX.Element => {
  return (
    <div className={styles.imgContainer}>
      {data.map((media: any, ind: number) => {
        // console.log('url:', url.url)
        return action === 'edit' ? (
          <ImageDeleteWrapper key={ind}>
            <Image url={media.url} filename={media.originalFilename} />
          </ImageDeleteWrapper>
        ) : (
          <Image url={media.url} filename={media.originalFilename} key={ind} />
        );
      })}
    </div>
  );
};
