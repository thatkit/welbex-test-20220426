"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogNoteForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const mobx_react_lite_1 = require("mobx-react-lite");
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const globalState_1 = require("../../globalState");
const FilesInput_1 = require("../FilesInput");
const uuid_1 = require("uuid");
exports.BlogNoteForm = (0, mobx_react_lite_1.observer)(({ data }) => {
    const [state] = (0, react_1.useState)((0, globalState_1.useGlobalState)());
    return ((0, jsx_runtime_1.jsxs)(reactstrap_1.Form, { children: [(0, jsx_runtime_1.jsxs)(reactstrap_1.FormGroup, Object.assign({ floating: true }, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Input, { id: "title", name: "title", placeholder: data.title || 'title', onFocus: ({ target }) => {
                            if (data.title)
                                target.value = data.title;
                        }, onChange: ({ target }) => {
                            state.titleInput = target.value;
                            state.setIdInput(data.id || (0, uuid_1.v4)());
                        } }), (0, jsx_runtime_1.jsx)(reactstrap_1.Label, Object.assign({ for: "title" }, { children: "Title" }))] })), (0, jsx_runtime_1.jsxs)(reactstrap_1.FormGroup, Object.assign({ floating: true }, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Input, { id: "message", name: "message", placeholder: data.message || 'message', type: "textarea", onFocus: ({ target }) => {
                            if (data.message)
                                target.value = data.message;
                        }, onChange: ({ target }) => {
                            state.messageInput = target.value;
                            state.setIdInput(data.id || (0, uuid_1.v4)());
                        } }), (0, jsx_runtime_1.jsx)(reactstrap_1.Label, Object.assign({ for: "message" }, { children: "Message" }))] })), (0, jsx_runtime_1.jsx)(FilesInput_1.FilesInput, { data: data })] }));
});
//# sourceMappingURL=index.js.map