export const filterOutMediaRefs = (arr1, arr2) => {
  const filteredArr = arr1.filter((ref) => !arr2.includes(ref));
  return filteredArr;
};
