import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { useGlobalState } from '../../globalState';
import { convertFiles } from '../../../../tools/convertFiles';
import { ImageContainer } from '../ImageContainer';

export const FilesInput = observer(({ data }: { data: any }) => {
  // # any
  const [state] = useState(useGlobalState());

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
          onChange={(e) => state.setMediaInput(convertFiles(e))}
        />
      </FormGroup>
    </>
  );
});
