"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthScreen = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const styles_module_scss_1 = require("./styles.module.scss");
const authState_1 = require("./authState");
const AuthScreen = () => {
    const [state] = (0, react_1.useState)((0, authState_1.useAuthState)());
    return ((0, jsx_runtime_1.jsx)(reactstrap_1.Container, Object.assign({ className: styles_module_scss_1.default.cnt }, { children: (0, jsx_runtime_1.jsxs)(reactstrap_1.Form, { children: [(0, jsx_runtime_1.jsxs)(reactstrap_1.FormGroup, Object.assign({ floating: true }, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Input, { id: "username", name: "username", placeholder: "your username", type: "text", onChange: ({ target }) => state.setUsernameInput(target.value) }), (0, jsx_runtime_1.jsx)(reactstrap_1.Label, Object.assign({ for: "username" }, { children: "Username" }))] })), (0, jsx_runtime_1.jsxs)(reactstrap_1.FormGroup, Object.assign({ floating: true }, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Input, { id: "password", name: "password", placeholder: "your password", type: "text", onChange: ({ target }) => state.setPasswordInput(target.value) }), (0, jsx_runtime_1.jsx)(reactstrap_1.Label, Object.assign({ for: "password" }, { children: "Password" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: styles_module_scss_1.default.btnWrapper }, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Button, Object.assign({ onClick: () => state.registerUser() }, { children: "Register" })), (0, jsx_runtime_1.jsx)(reactstrap_1.Button, Object.assign({ onClick: () => state.loginUser() }, { children: "Login" }))] }))] }) })));
};
exports.AuthScreen = AuthScreen;
//# sourceMappingURL=index.js.map