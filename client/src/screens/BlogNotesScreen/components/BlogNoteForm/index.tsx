import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useGlobalState } from '../../../../state/globalState';
import { FilesInput } from '../FilesInput';

export const BlogNoteForm = observer(
  ({ data }: { data: any }) => {
    // # any
    const [state] = useState(useGlobalState());

    return (
      <Form>
        <FormGroup floating>
          <Input
            id="title"
            name="title"
            placeholder="your title"
            value={data.title}
            onChange={({ target }) => {
              state.setTitleInput(target.value);
              state.setIdInput(data.id);
            }}
          />
          <Label for="title">Title</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="message"
            name="message"
            placeholder="your message"
            type="textarea"
            value={data.message}
            onChange={({ target }) => state.setMessageInput(target.value)}
          />
          <Label for="message">Message</Label>
        </FormGroup>
        <FilesInput data={data} />
      </Form>
    );
  },
);
