import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { ImageContainer } from '../ImageContainer';

export const FilesInput = ({ data }: { data: any }) => {
  // # any
  return (
    <>
      {Boolean(data.media) !== false && (
        <ImageContainer action={'edit'} data={data} />
      )}
      <FormGroup>
        <Input
          id="file"
          name="file"
          placeholder="your file"
          type="file"
          onInput={({ target }) => console.log(target)} // # onSubmit somewhere
        />
      </FormGroup>
    </>
  );
};
