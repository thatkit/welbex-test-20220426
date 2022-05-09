import { log } from "./log";

export const convertJsObjToFormData = (jsObj: object) => {
  const formData = new FormData();
  Object.entries(jsObj).forEach((entry) => {
    typeof entry[1] === 'object'
      ? entry[1].forEach((item: any) => {
          return formData.append(entry[0], item.blob, item.originalname);
        })
      : formData.append(entry[0], entry[1]);
  });
  return formData;
};
