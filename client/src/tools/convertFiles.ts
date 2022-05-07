export const convertFiles = async (event: any) => {
  const files = event.target.files || new FileList();

  const convertedFiles = Array.from(files).map(async (file: any) => {
    const blob = new Blob([file]);
    const buffer = await blob.arrayBuffer();
    return {
      originalname: file.name,
      mimetype: file.type,
      buffer,
    };
  });

  return await Promise.all(convertedFiles);
};
