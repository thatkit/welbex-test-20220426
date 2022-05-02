import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './styles.module.scss';
import { FilesInput } from '../FilesInput';

export const BlogNoteForm = ({ action, data }: { action: any; data: any }) => {
  // # any
  return (
    <Form>
      {action.action === 'create' && (
        <FormGroup floating>
          <Input id="title" name="title" placeholder="your title" type="text" />
          <Label for="title">Title</Label>
        </FormGroup>
      )}
      <FormGroup floating>
        <Input
          id="message"
          name="message"
          placeholder="your message"
          type="textarea"
          value={data.message && data.message}
        />
        <Label for="message">Message</Label>
      </FormGroup>
      <FilesInput media={data.media} />
    </Form>
  );
};
