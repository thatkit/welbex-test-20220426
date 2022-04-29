/* eslint-disable prettier/prettier */
import { InternalServerErrorException } from '@nestjs/common';

export const mapMediaRefs = (refsArr, parentId) => {
  if (!refsArr) throw new InternalServerErrorException();
  
  const objArr = refsArr.map((ref) => ({
    fileName: ref,
    blogNoteId: parentId,
  }));

//   console.log(objArr)

  return objArr;
};
