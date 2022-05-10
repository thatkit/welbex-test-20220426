"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogNotesScreen = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
const reactstrap_1 = require("reactstrap");
const styles_module_scss_1 = require("./styles.module.scss");
const Navbar_1 = require("./components/Navbar");
const BlogNoteCloud_1 = require("./components/BlogNoteCloud");
const BlogNoteModal_1 = require("./components/BlogNoteModal");
const BlogNotesScreen = () => {
    return ((0, jsx_runtime_1.jsxs)(reactstrap_1.Container, Object.assign({ className: styles_module_scss_1.default.cnt }, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.Navbar, {}), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: styles_module_scss_1.default.btnWrapper }, { children: (0, jsx_runtime_1.jsx)(BlogNoteModal_1.BlogNoteModal, { action: { action: 'create' }, data: {} }) })), (0, jsx_runtime_1.jsx)(BlogNoteCloud_1.BlogNoteCloud, {})] })));
};
exports.BlogNotesScreen = BlogNotesScreen;
//# sourceMappingURL=index.js.map