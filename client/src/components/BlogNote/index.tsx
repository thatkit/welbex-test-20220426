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
    <Card>
        <div>
            {data.media.map((file: any) => <CardImg
                key={file.id}
                alt={file.fileName}
                src="https://picsum.photos/seed/picsum/200/300"
                top
            />)}
        </div>
        <CardBody>
            <CardTitle tag="h5" className={styles.title}>{data.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">{data.date}</CardSubtitle>
            <CardText>{data.message}</CardText>
            <Button>CTA</Button>
        </CardBody>
    </Card>
  )
}
