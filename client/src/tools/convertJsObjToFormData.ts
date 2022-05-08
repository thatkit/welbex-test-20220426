export const convertJsObjToFormData = (jsObj: object) => {
  const formData = new FormData();
  Object.entries(jsObj).forEach((entry) => formData.append(entry[0], entry[1]));
  return formData;
};
