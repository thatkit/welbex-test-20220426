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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobalState = exports.GlobalStateProvider = exports.GlobalStateContext = exports.GlobalState = void 0;
const react_1 = require("react");
const mobx_1 = require("mobx");
const api_1 = require("../../api");
class GlobalState {
    constructor() {
        this._blogNotes = [];
        this._blogNotesMedia = [];
        this.blogNoteInputs = {
            id: '',
            title: '',
            message: '',
            files: [],
            deleteFiles: '',
        };
        (0, mobx_1.makeAutoObservable)(this);
        this.client = new api_1.apiClient();
    }
    initialise() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setBlogNotes();
            yield this.setMedia();
        });
    }
    set blogNotes(blogNotes) {
        this._blogNotes = blogNotes;
    }
    setBlogNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.blogNotes = yield this.fetchAllBlogNotes();
        });
    }
    setMedia() {
        return __awaiter(this, void 0, void 0, function* () {
            this.blogNotes.forEach((blogNote) => __awaiter(this, void 0, void 0, function* () {
                this._blogNotesMedia.push({
                    blogNoteId: blogNote.id,
                    media: yield this.fetchBlogNoteMedia(blogNote.id),
                });
            }));
        });
    }
    get blogNotes() {
        return this._blogNotes;
    }
    get getSortedBlogNotes() {
        return this.blogNotes
            .slice()
            .sort((prev, next) => new Date(next.date).getTime() - new Date(prev.date).getTime());
    }
    getOneBlogNoteMedia(blogNoteId) {
        const blogNoteMedia = this._blogNotesMedia.find((blogNote) => blogNote.blogNoteId === blogNoteId);
        return blogNoteMedia;
    }
    hasMedia(blogNoteId) {
        const blogNoteMedia = this.getOneBlogNoteMedia(blogNoteId);
        if (blogNoteMedia) {
            return Boolean(blogNoteMedia.media);
        }
    }
    setIdInput(id) {
        if (!Boolean(this.blogNoteInputs.id))
            return (this.blogNoteInputs.id = id);
    }
    emptyIdInput() {
        this.blogNoteInputs.id = '';
    }
    set titleInput(title) {
        this.blogNoteInputs.title = title;
    }
    set messageInput(message) {
        this.blogNoteInputs.message = message;
    }
    setFilesInput(convertedFiles) {
        return __awaiter(this, void 0, void 0, function* () {
            this.blogNoteInputs.files = yield convertedFiles;
        });
    }
    set deleteFilesInput(deleteFiles) {
        this.blogNoteInputs.deleteFiles = deleteFiles;
    }
    setDeleteFilesAll(blogNoteId) {
        const blogNoteMedia = this.getOneBlogNoteMedia(blogNoteId);
        if (blogNoteMedia === null || blogNoteMedia === void 0 ? void 0 : blogNoteMedia.media) {
            const filenames = blogNoteMedia.media.map((file) => file.originalFilename);
            this.deleteFilesInput = filenames.join('/');
        }
    }
    setDeleteFilesSeveral(originalFilename) {
        this.deleteFilesInput =
            this.blogNoteInputs.deleteFiles.length === 0
                ? originalFilename
                : this.blogNoteInputs.deleteFiles + `/${originalFilename}`;
    }
    saveBlogNote() {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = this.blogNoteInputs, { deleteFiles } = _a, blogNoteInputWithoutDeleteFiles = __rest(_a, ["deleteFiles"]);
            yield this.client.saveBlogNote(blogNoteInputWithoutDeleteFiles);
            yield this.initialise();
        });
    }
    fetchAllBlogNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.getBlogNotes();
        });
    }
    fetchBlogNoteMedia(blogNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const keys = yield this.fetchOneBlogNoteMedia(blogNoteId);
            const originalFilenames = keys.map((key) => key.slice(key.lastIndexOf('/') + 1));
            const blogNoteMedia = yield Promise.all(originalFilenames.map((filename) => __awaiter(this, void 0, void 0, function* () {
                const urlObj = yield this.fetchOneMediaUrl(blogNoteId, filename);
                return {
                    originalFilename: filename,
                    url: urlObj.url,
                };
            })));
            return blogNoteMedia;
        });
    }
    fetchOneBlogNoteMedia(blogNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.getBlogNoteMedia(blogNoteId);
        });
    }
    fetchOneMediaUrl(blogNoteId, mediaOriginalname) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.getBlogNoteMediaUrl(blogNoteId, mediaOriginalname);
        });
    }
    updateBlogNote() {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = this.blogNoteInputs, { id } = _a, blogNoteInputWithoutId = __rest(_a, ["id"]);
            yield this.client.updateBlogNote(blogNoteInputWithoutId, this.blogNoteInputs.id);
            yield this.initialise();
        });
    }
    deleteBlogNote() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.deleteBlogNote(this.blogNoteInputs.deleteFiles, this.blogNoteInputs.id);
            yield this.initialise();
        });
    }
}
exports.GlobalState = GlobalState;
exports.GlobalStateContext = (0, react_1.createContext)(new GlobalState());
exports.GlobalStateProvider = exports.GlobalStateContext.Provider;
const useGlobalState = () => {
    return (0, react_1.useContext)(exports.GlobalStateContext);
};
exports.useGlobalState = useGlobalState;
//# sourceMappingURL=globalState.js.map