import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { useGlobalState } from '../../globalState';
import { convertFiles } from '../../../../tools/convertFiles';
import { ImageContainer } from '../ImageContainer';

export const FilesInput = observer(({ data }: { data: any }): JSX.Element => {
  // # any
  const [state] = useState(useGlobalState());

  return (
    <>
      {state.hasMedia(data.id) && (
        <ImageContainer
          action={'edit'}
          data={state.getOneBlogNoteMedia(data.id)?.media}
        />
      )}
      <FormGroup>
        <Input
          id="file"
          name="file"
          placeholder="your file"
          type="file"
          multiple={true}
          onChange={(e) => state.setFilesInput(convertFiles(e))}
        />
      </FormGroup>
    </>
  );
});
