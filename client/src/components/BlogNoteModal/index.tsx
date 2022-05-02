import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { BlogNoteForm } from '../BlogNoteForm';

export const BlogNoteModal = ({ action, data }: { action: any; data: any }) => {
  // # any
  const [isOpen, setIsOpen] = useState(false);

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
          <Button color="warning">Save</Button>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
