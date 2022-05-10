"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
const mobx_react_lite_1 = require("mobx-react-lite");
const authState_1 = require("../../screens/AuthScreen/authState");
const BlogNotesScreen_1 = require("../../screens/BlogNotesScreen");
const AuthScreen_1 = require("../../screens/AuthScreen");
const App = (0, mobx_react_lite_1.observer)(() => {
    const [state] = (0, react_1.useState)((0, authState_1.useAuthState)());
    (0, react_1.useEffect)(() => {
        state.validateToken();
    }, []);
    return state.isAuthorised
        ? (0, jsx_runtime_1.jsx)(BlogNotesScreen_1.BlogNotesScreen, {})
        : (0, jsx_runtime_1.jsx)(AuthScreen_1.AuthScreen, {});
});
exports.default = App;
//# sourceMappingURL=index.js.map