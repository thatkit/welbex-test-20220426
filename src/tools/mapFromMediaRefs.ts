/* eslint-disable prettier/prettier */
export const mapToMediaIds = (arrOfObj, arrOfRefs) => {
  const ids = arrOfObj
    .filter((media) => arrOfRefs.includes(media.fileName))
    .map((media) => media.id);
  return ids;
};
