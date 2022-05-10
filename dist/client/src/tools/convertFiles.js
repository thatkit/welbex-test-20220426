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
exports.convertFiles = void 0;
const convertFiles = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const files = event.target.files;
    const blobsPromise = Array.from(files).map((file) => __awaiter(void 0, void 0, void 0, function* () {
        const blob = new Blob([file], { type: file.type });
        return { blob, originalname: file.name };
    }));
    const blobs = yield Promise.all(blobsPromise);
    return blobs;
});
exports.convertFiles = convertFiles;
//# sourceMappingURL=convertFiles.js.map