"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDeleteWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_module_scss_1 = require("./styles.module.scss");
const cross_icon_svg_1 = require("../../../../assets/cross-icon.svg");
const mobx_react_lite_1 = require("mobx-react-lite");
const globalState_1 = require("../../globalState");
exports.ImageDeleteWrapper = (0, mobx_react_lite_1.observer)(({ children }) => {
    const styleMapper = {
        true: { display: 'block' },
        false: { display: 'none' },
    };
    const [state] = (0, react_1.useState)((0, globalState_1.useGlobalState)());
    const [isImgShown, setIsImgShown] = (0, react_1.useState)(true);
    const [isWrapperShown, setIsWrapperShown] = (0, react_1.useState)(false);
    const makeImgAndWrapperDissapear = () => {
        setIsImgShown(false);
        setIsWrapperShown(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: styles_module_scss_1.default.wrapper, style: styleMapper[`${isImgShown}`], onClick: () => setIsWrapperShown(true), onMouseLeave: () => setIsWrapperShown(false) }, { children: [children, (0, jsx_runtime_1.jsx)("img", { className: styles_module_scss_1.default.closeIcon, style: styleMapper[`${isWrapperShown}`], alt: "X", src: cross_icon_svg_1.default, onClick: () => {
                    state.setDeleteFilesSeveral(children.props.filename);
                    makeImgAndWrapperDissapear();
                } })] })));
});
//# sourceMappingURL=index.js.map