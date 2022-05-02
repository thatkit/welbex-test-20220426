import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';
import styles from './styles.module.scss';
import { BlogNoteModal } from '../BlogNoteModal';

export const BlogNote = ({ data }: { data: any }) => { // # any
  const action = {
    action: 'edit',
  };
    
  return (
    <Card className={styles.card}>
      <div className={styles.cardBorder}>
        <div className={styles.imgContainer}>
            {data.media.map((file: any) => <CardImg
            className={styles.img}
                key={file.id}
                alt={file.fileName}
                src="https://picsum.photos/seed/picsum/200/300"
                top
            />)}
        </div>
        <CardBody className={styles.cardBody}>
            <div className={styles.textPart}>
                <CardTitle className={styles.title} tag="h5">{data.title}</CardTitle>
                <CardSubtitle className="text-muted" tag="h6">{data.date}</CardSubtitle>
                <CardText>{data.message}</CardText>
            </div>
            <BlogNoteModal action={action} data={data} />
        </CardBody>
      </div>
    </Card>
  )
}
