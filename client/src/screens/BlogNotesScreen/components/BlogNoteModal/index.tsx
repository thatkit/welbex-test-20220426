import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useGlobalState } from '../../../../state/globalState';
import { BlogNoteForm } from '../BlogNoteForm';

export const BlogNoteModal = observer(({ action, data }: { action: any; data: any }) => {
  // # any
  const [isOpen, setIsOpen] = useState(false);
  const [state] = useState(useGlobalState());

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        {action.action.toUpperCase()}
      </Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)} centered>
        <ModalHeader>{data.title || 'New message'}</ModalHeader>
        <ModalBody>
          <BlogNoteForm action={action} data={data} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => state.saveBlogNote()} color="warning">Save</Button>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
});
