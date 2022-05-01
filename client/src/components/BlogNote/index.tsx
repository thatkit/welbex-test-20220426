import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from 'reactstrap';
import styles from './styles.module.scss';

export const BlogNote = ({ data }: { data: any }) => { // £ any
  return (
    <Card className={styles.card}>
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
            <div>
                <CardTitle className={styles.title} tag="h5">{data.title}</CardTitle>
                <CardSubtitle className="text-muted" tag="h6">{data.date}</CardSubtitle>
                <CardText>{data.message}</CardText>
            </div>
            <Button className={styles.btn}>Edit</Button>
        </CardBody>
    </Card>
  )
}
