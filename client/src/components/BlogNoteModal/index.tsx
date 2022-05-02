import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export const BlogNoteModal = ({
  action,
  data,
}: {
  action: any;
  data: any;
}) => {
  // # any
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        {action.action.toUpperCase()}
      </Button>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(false)} centered>
        <ModalHeader>{data.title}</ModalHeader>
        <ModalBody>Form component</ModalBody>
        <ModalFooter>
          <Button color="warning">Save</Button>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
