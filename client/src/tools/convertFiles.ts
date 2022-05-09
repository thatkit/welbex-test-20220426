export const convertFiles = async (event: any) => {
  const files = event.target.files;

  const blobsPromise = Array.from(files).map(async (file: any) => {
    const blob = new Blob([file], { type: file.type });
    return { blob, originalname: file.name };
  });

  const blobs = await Promise.all(blobsPromise);

  return blobs;
};
