"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertJsObjToFormData = void 0;
const convertJsObjToFormData = (jsObj) => {
    const formData = new FormData();
    Object.entries(jsObj).forEach((entry) => {
        typeof entry[1] === 'object'
            ? entry[1].forEach((item) => {
                return formData.append(entry[0], item.blob, item.originalname);
            })
            : entry[1] && formData.append(entry[0], entry[1]);
    });
    return formData;
};
exports.convertJsObjToFormData = convertJsObjToFormData;
//# sourceMappingURL=convertJsObjToFormData.js.map