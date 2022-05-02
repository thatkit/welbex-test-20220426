import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import styles from './styles.module.scss';
import { BlogNoteModal } from '../BlogNoteModal';
import { ImageContainer } from '../ImageContainer';

export const BlogNote = ({ data }: { data: any }) => {
  // # any
  const action = {
    action: 'create',
  };

  return (
    <Card className={styles.card}>
      <div className={styles.cardBorder}>
        <ImageContainer action={action.action} data={data} />
        <CardBody className={styles.cardBody}>
          <div className={styles.textPart}>
            <CardTitle className={styles.title} tag="h5">
              {data.title}
            </CardTitle>
            <CardSubtitle className="text-muted" tag="h6">
              {data.date}
            </CardSubtitle>
            <CardText>{data.message}</CardText>
          </div>
          <BlogNoteModal action={{ action: 'edit' }} data={data} />
        </CardBody>
      </div>
    </Card>
  );
};
