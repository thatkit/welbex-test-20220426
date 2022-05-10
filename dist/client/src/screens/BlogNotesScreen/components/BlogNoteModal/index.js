"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogNoteModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const mobx_react_lite_1 = require("mobx-react-lite");
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const globalState_1 = require("../../globalState");
const BlogNoteForm_1 = require("../BlogNoteForm");
exports.BlogNoteModal = (0, mobx_react_lite_1.observer)(({ action, data }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [state] = (0, react_1.useState)((0, globalState_1.useGlobalState)());
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Button, Object.assign({ onClick: () => setIsOpen(true) }, { children: action.action.toUpperCase() })), (0, jsx_runtime_1.jsxs)(reactstrap_1.Modal, Object.assign({ isOpen: isOpen, toggle: () => setIsOpen(false), centered: true }, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.ModalHeader, { children: data.title || 'New message' }), (0, jsx_runtime_1.jsx)(reactstrap_1.ModalBody, { children: (0, jsx_runtime_1.jsx)(BlogNoteForm_1.BlogNoteForm, { data: data }) }), (0, jsx_runtime_1.jsxs)(reactstrap_1.ModalFooter, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Button, Object.assign({ onClick: () => {
                                    action.action === 'create'
                                        ? state.saveBlogNote()
                                        : state.updateBlogNote();
                                    setIsOpen(false);
                                }, color: "warning" }, { children: "Save" })), (0, jsx_runtime_1.jsx)(reactstrap_1.Button, Object.assign({ onClick: () => setIsOpen(false) }, { children: "Cancel" }))] })] }))] }));
});
//# sourceMappingURL=index.js.map