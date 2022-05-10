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
exports.apiClient = void 0;
const js_cookie_1 = require("js-cookie");
const convertJsObjToFormData_1 = require("../tools/convertJsObjToFormData");
class apiClient {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }
    registerUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}/auth/register/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                });
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    loginUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}/auth/login/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user),
                });
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getUsername() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}/auth/login/`, {
                    headers: { Authorization: `Bearer ${js_cookie_1.default.get('accessToken')}` },
                });
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    saveBlogNote(blogNote) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}/blog-notes`, {
                    method: 'POST',
                    headers: { Authorization: `Bearer ${js_cookie_1.default.get('accessToken')}` },
                    body: (0, convertJsObjToFormData_1.convertJsObjToFormData)(blogNote),
                });
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getBlogNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}/blog-notes`, {
                    headers: { Authorization: `Bearer ${js_cookie_1.default.get('accessToken')}` },
                });
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getBlogNoteMedia(blogNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}/media/${blogNoteId}`, {
                    headers: { Authorization: `Bearer ${js_cookie_1.default.get('accessToken')}` },
                });
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getBlogNoteMediaUrl(blogNoteId, mediaOriginalname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}/media/url/${blogNoteId}/${mediaOriginalname}`, {
                    headers: { Authorization: `Bearer ${js_cookie_1.default.get('accessToken')}` },
                });
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    updateBlogNote(blogNote, blogNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.baseUrl}/blog-notes/${blogNoteId}`, {
                    method: 'PUT',
                    headers: { Authorization: `Bearer ${js_cookie_1.default.get('accessToken')}` },
                    body: (0, convertJsObjToFormData_1.convertJsObjToFormData)(blogNote),
                });
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    deleteBlogNote(deleteFiles, blogNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('deleteFiles', deleteFiles);
            try {
                const response = yield fetch(`${this.baseUrl}/blog-notes/${blogNoteId}`, {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${js_cookie_1.default.get('accessToken')}` },
                    body: formData,
                });
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const parsed = yield response.json();
                return parsed;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.apiClient = apiClient;
//# sourceMappingURL=index.js.map