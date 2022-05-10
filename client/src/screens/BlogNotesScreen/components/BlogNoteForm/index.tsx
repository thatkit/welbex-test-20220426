import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useGlobalState } from '../../globalState';
import { FilesInput } from '../FilesInput';
import { v4 as uuid } from 'uuid';

export const BlogNoteForm = observer(({ data }: { data: any }) => {
  // # any
  const [state] = useState(useGlobalState());

  return (
    <Form>
      <FormGroup floating>
        <Input
          id="title"
          name="title"
          placeholder={data.title || 'title'}
          onFocus={({ target }) => {
            if (data.title) target.value = data.title;
          }}
          onChange={({ target }) => {
            state.setTitleInput(target.value);
            state.setIdInput(data.id || uuid());
          }}
        />
        <Label for="title">Title</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="message"
          name="message"
          placeholder={data.message || 'message'}
          type="textarea"
          onFocus={({ target }) => {
            if (data.message) target.value = data.message;
          }}
          onChange={({ target }) => state.setMessageInput(target.value)}
        />
        <Label for="message">Message</Label>
      </FormGroup>
      <FilesInput data={data} />
    </Form>
  );
});
