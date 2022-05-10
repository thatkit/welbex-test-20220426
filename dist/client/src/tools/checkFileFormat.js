"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFileFormat = void 0;
const checkFileFormat = (filename) => {
    const imageTypes = ['png', 'jpg', 'jpeg', 'svg', 'gif'];
    const fileformat = filename.slice(filename.lastIndexOf('.') + 1);
    return imageTypes.includes(fileformat);
};
exports.checkFileFormat = checkFileFormat;
//# sourceMappingURL=checkFileFormat.js.map