"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const mobx_react_lite_1 = require("mobx-react-lite");
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const globalState_1 = require("../../globalState");
const convertFiles_1 = require("../../../../tools/convertFiles");
const ImageContainer_1 = require("../ImageContainer");
exports.FilesInput = (0, mobx_react_lite_1.observer)(({ data }) => {
    var _a;
    const [state] = (0, react_1.useState)((0, globalState_1.useGlobalState)());
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [state.hasMedia(data.id) && ((0, jsx_runtime_1.jsx)(ImageContainer_1.ImageContainer, { action: 'edit', data: (_a = state.getOneBlogNoteMedia(data.id)) === null || _a === void 0 ? void 0 : _a.media })), (0, jsx_runtime_1.jsx)(reactstrap_1.FormGroup, { children: (0, jsx_runtime_1.jsx)(reactstrap_1.Input, { id: "file", name: "file", placeholder: "your file", type: "file", multiple: true, onChange: (e) => state.setFilesInput((0, convertFiles_1.convertFiles)(e)) }) })] }));
});
//# sourceMappingURL=index.js.map