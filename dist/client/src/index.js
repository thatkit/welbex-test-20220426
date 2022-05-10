"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const index_1 = require("./components/App/index");
const reportWebVitals_1 = require("./reportWebVitals");
const authState_1 = require("./screens/AuthScreen/authState");
const globalState_1 = require("./screens/BlogNotesScreen/globalState");
const root = client_1.default.createRoot(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(authState_1.AuthStateProvider, Object.assign({ value: new authState_1.AuthState() }, { children: (0, jsx_runtime_1.jsx)(globalState_1.GlobalStateProvider, Object.assign({ value: new globalState_1.GlobalState() }, { children: (0, jsx_runtime_1.jsx)(index_1.default, {}) })) })));
(0, reportWebVitals_1.default)();
//# sourceMappingURL=index.js.map