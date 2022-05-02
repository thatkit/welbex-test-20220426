import React, { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { ImageContainer } from '../ImageContainer';

export const FilesInput = ({ media }: { media: any }) => {
  // # any
  const [filesQty, setFilesQty] = useState(media.length);

  return (
    <>
			{media.length !== 0 && <ImageContainer media={media}/>}
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
