import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { convertFiles } from '../../../../tools/convertFiles';
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
          multiple={true}
          onChange={convertFiles}
        />
      </FormGroup>
    </>
  );
};
