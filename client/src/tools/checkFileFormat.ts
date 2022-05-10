export const checkFileFormat = (filename: string) => {
    const imageTypes = ['png', 'jpg', 'jpeg', 'svg', 'gif'];
    const fileformat = filename.slice(filename.lastIndexOf('.') + 1);
    return imageTypes.includes(fileformat);
}