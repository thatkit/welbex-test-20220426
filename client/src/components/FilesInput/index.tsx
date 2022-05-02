import React, { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { ImageContainer } from '../ImageContainer';

export const FilesInput = ({ media }: { media: any }) => {
  // # any
  const [filesQty, setFilesQty] = useState(
    Boolean(media) !== false ? media.length : 0,
  );

  return (
    <>
      {Boolean(media) !== false && (
        <ImageContainer action={'edit'} media={media} />
      )}
      <FormGroup>
        <Input
          id="file"
          name="file"
          placeholder="your file"
          type="file"
          onInput={() => console.log(filesQty)}
        />
      </FormGroup>
    </>
  );
};
