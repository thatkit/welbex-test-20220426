"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = require("./styles.module.scss");
const Image_1 = require("../Image");
const ImageDeleteWrapper_1 = require("../ImageDeleteWrapper");
const ImageContainer = ({ action, data, }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: styles_module_scss_1.default.imgContainer }, { children: data.map((media, ind) => {
            return action === 'edit' ? ((0, jsx_runtime_1.jsx)(ImageDeleteWrapper_1.ImageDeleteWrapper, { children: (0, jsx_runtime_1.jsx)(Image_1.Image, { url: media.url, filename: media.originalFilename }) }, ind)) : ((0, jsx_runtime_1.jsx)(Image_1.Image, { url: media.url, filename: media.originalFilename }, ind));
        }) })));
};
exports.ImageContainer = ImageContainer;
//# sourceMappingURL=index.js.map