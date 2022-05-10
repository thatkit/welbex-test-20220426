"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const authState_1 = require("../../../AuthScreen/authState");
const styles_module_scss_1 = require("./styles.module.scss");
const Navbar = () => {
    const [state] = (0, react_1.useState)((0, authState_1.useAuthState)());
    return ((0, jsx_runtime_1.jsx)(reactstrap_1.Nav, Object.assign({ className: styles_module_scss_1.default.nav }, { children: (0, jsx_runtime_1.jsxs)(reactstrap_1.NavItem, Object.assign({ className: styles_module_scss_1.default.topTitle, tag: "h1" }, { children: [state.username, "'s Blog"] })) })));
};
exports.Navbar = Navbar;
//# sourceMappingURL=index.js.map