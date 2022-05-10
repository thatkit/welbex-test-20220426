"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogNote = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const styles_module_scss_1 = require("./styles.module.scss");
const BlogNoteModal_1 = require("../BlogNoteModal");
const ImageContainer_1 = require("../ImageContainer");
const cross_icon_svg_1 = require("../../../../assets/cross-icon.svg");
const mobx_react_lite_1 = require("mobx-react-lite");
const globalState_1 = require("../../globalState");
exports.BlogNote = (0, mobx_react_lite_1.observer)(({ blogNote }) => {
    var _a;
    const action = {
        action: 'create',
    };
    const [state] = (0, react_1.useState)((0, globalState_1.useGlobalState)());
    return ((0, jsx_runtime_1.jsx)(reactstrap_1.Card, Object.assign({ className: styles_module_scss_1.default.card }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: styles_module_scss_1.default.cardBorder }, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Badge, Object.assign({ className: styles_module_scss_1.default.closeButton, color: "danger" }, { children: (0, jsx_runtime_1.jsx)("img", { className: styles_module_scss_1.default.closeIcon, alt: "X", src: cross_icon_svg_1.default, onClick: () => {
                            state.setIdInput(blogNote.id);
                            state.setDeleteFilesAll(blogNote.id);
                            state.deleteBlogNote();
                            state.emptyIdInput();
                        } }) })), state.hasMedia(blogNote.id) && ((0, jsx_runtime_1.jsx)(ImageContainer_1.ImageContainer, { action: action.action, data: (_a = state.getOneBlogNoteMedia(blogNote.id)) === null || _a === void 0 ? void 0 : _a.media })), (0, jsx_runtime_1.jsxs)(reactstrap_1.CardBody, Object.assign({ className: styles_module_scss_1.default.cardBody }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: styles_module_scss_1.default.textPart }, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.CardTitle, Object.assign({ className: styles_module_scss_1.default.title, tag: "h5" }, { children: blogNote.title })), (0, jsx_runtime_1.jsx)(reactstrap_1.CardSubtitle, Object.assign({ className: "text-muted", tag: "h6" }, { children: new Date(blogNote.date).toLocaleString('en-GB') })), (0, jsx_runtime_1.jsx)(reactstrap_1.CardText, { children: blogNote.message })] })), (0, jsx_runtime_1.jsx)(BlogNoteModal_1.BlogNoteModal, { action: { action: 'edit' }, data: blogNote })] }))] })) })));
});
//# sourceMappingURL=index.js.map