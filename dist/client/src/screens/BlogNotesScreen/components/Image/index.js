"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const reactstrap_1 = require("reactstrap");
const checkFileFormat_1 = require("../../../../tools/checkFileFormat");
const styles_module_scss_1 = require("./styles.module.scss");
const video_icon_webp_1 = require("../../../../assets/video-icon.webp");
const Image = ({ url, filename }) => {
    return ((0, jsx_runtime_1.jsx)(reactstrap_1.CardImg, { className: styles_module_scss_1.default.img, alt: "media file", src: (0, checkFileFormat_1.checkFileFormat)(filename) ? url : video_icon_webp_1.default, top: true }));
};
exports.Image = Image;
//# sourceMappingURL=index.js.map