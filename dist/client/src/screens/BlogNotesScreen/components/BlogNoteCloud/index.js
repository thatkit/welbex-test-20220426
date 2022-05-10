"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogNoteCloud = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const reactstrap_1 = require("reactstrap");
const styles_module_scss_1 = require("./styles.module.scss");
const BlogNote_1 = require("../BlogNote");
const globalState_1 = require("../../globalState");
const mobx_react_lite_1 = require("mobx-react-lite");
exports.BlogNoteCloud = (0, mobx_react_lite_1.observer)(() => {
    const [state] = (0, react_1.useState)((0, globalState_1.useGlobalState)());
    (0, react_1.useEffect)(() => {
        state.initialise();
    }, []);
    return ((0, jsx_runtime_1.jsx)(reactstrap_1.CardGroup, Object.assign({ className: styles_module_scss_1.default.cardGroup }, { children: state.getSortedBlogNotes.map((blogNoteData, ind) => {
            return (0, jsx_runtime_1.jsx)(BlogNote_1.BlogNote, { blogNote: blogNoteData }, ind);
        }) })));
});
//# sourceMappingURL=index.js.map