import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import styles from './styles.module.scss';
import { BlogNoteModal } from '../BlogNoteModal';
import { ImageContainer } from '../ImageContainer';
import closeIcon from '../../../../assets/cross-icon.svg';
import { observer } from 'mobx-react-lite';
import { useGlobalState } from '../../globalState';

export const BlogNote = observer(({ data }: { data: any }) => {
  // # any
  const action = {
    action: 'create',
  }; // # what for?

  const [state] = useState(useGlobalState());

  return (
    <Card className={styles.card}>
      <div className={styles.cardBorder}>
        <Badge className={styles.closeButton} color='danger'><img
          className={styles.closeIcon}
          alt="X"
          src={closeIcon}
          onClick={() => {
            state.setIdInput(data.id);
            state.deleteBlogNote();
            state.emptyIdInput();
          }}
        /></Badge>
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
});
