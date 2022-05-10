"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthState = exports.AuthStateProvider = exports.AuthStateContext = exports.AuthState = void 0;
const react_1 = require("react");
const mobx_1 = require("mobx");
const js_cookie_1 = require("js-cookie");
const api_1 = require("../../api");
class AuthState {
    constructor() {
        this.isAuthorised = false;
        this._username = '';
        this.userInputs = {
            username: '',
            password: '',
        };
        (0, mobx_1.makeAutoObservable)(this);
        this.client = new api_1.apiClient();
    }
    setUsernameInput(username) {
        this.userInputs.username = username;
    }
    setPasswordInput(password) {
        this.userInputs.password = password;
    }
    registerUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.registerUser(this.userInputs);
            if (!(response === null || response === void 0 ? void 0 : response.username)) {
                this.setUnauthorised();
                return null;
            }
            yield this.loginUser();
            this.username = response;
        });
    }
    loginUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = yield this.client.loginUser(this.userInputs);
            if (accessToken === null || accessToken === void 0 ? void 0 : accessToken.accessToken) {
                js_cookie_1.default.set('accessToken', accessToken === null || accessToken === void 0 ? void 0 : accessToken.accessToken);
                this.validateToken();
            }
        });
    }
    validateToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (js_cookie_1.default.get('accessToken')) {
                const response = yield this.client.getUsername();
                if (response.username) {
                    this.setAuthorised();
                    this.username = response.username;
                }
            }
        });
    }
    setAuthorised() {
        this.isAuthorised = true;
    }
    setUnauthorised() {
        this.isAuthorised = false;
    }
    set username(username) {
        this._username = username;
    }
    get username() {
        return this._username;
    }
}
exports.AuthState = AuthState;
exports.AuthStateContext = (0, react_1.createContext)(new AuthState());
exports.AuthStateProvider = exports.AuthStateContext.Provider;
const useAuthState = () => {
    return (0, react_1.useContext)(exports.AuthStateContext);
};
exports.useAuthState = useAuthState;
//# sourceMappingURL=authState.js.map