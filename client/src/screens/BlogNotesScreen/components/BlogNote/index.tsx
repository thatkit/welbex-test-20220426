import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Badge,
} from 'reactstrap';
import styles from './styles.module.scss';
import { BlogNoteModal } from '../BlogNoteModal';
import { ImageContainer } from '../ImageContainer';
import closeIcon from '../../../../assets/cross-icon.svg';
import { observer } from 'mobx-react-lite';
import { useGlobalState } from '../../globalState';
import { BlogNote as BlogNoteType } from '../../../../types';

export const BlogNote = observer(({ blogNote }: { blogNote: BlogNoteType }) => {
  const action = {
    action: 'create',
  }; // # what for?

  const [state] = useState(useGlobalState());
  useEffect(() => {
    state.setBlogNoteMedia(blogNote.id);
  }, []);

  return (
    <Card className={styles.card}>
      <div className={styles.cardBorder}>
        <Badge className={styles.closeButton} color="danger">
          <img
            className={styles.closeIcon}
            alt="X"
            src={closeIcon}
            onClick={() => {
              state.setIdInput(blogNote.id);
              state.deleteBlogNote();
              state.emptyIdInput();
            }}
          />
        </Badge>
        {state.blogNoteMedia && (
          <ImageContainer action={action.action} data={state.blogNoteMedia} />
        )}
        <CardBody className={styles.cardBody}>
          <div className={styles.textPart}>
            <CardTitle className={styles.title} tag="h5">
              {blogNote.title}
            </CardTitle>
            <CardSubtitle className="text-muted" tag="h6">
              {new Date(blogNote.date).toLocaleString('en-GB')}
            </CardSubtitle>
            <CardText>{blogNote.message}</CardText>
          </div>
          <BlogNoteModal action={{ action: 'edit' }} data={blogNote} />
        </CardBody>
      </div>
    </Card>
  );
});
