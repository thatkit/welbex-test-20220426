"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.BlogNotesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const media_service_1 = require("../media/media.service");
const blog_notes_service_1 = require("./blog-notes.service");
const create_blog_note_dto_1 = require("./dto/create-blog-note.dto");
const update_blog_note_dto_1 = require("./dto/update-blog-note.dto");
let BlogNotesController = class BlogNotesController {
    constructor(blogNotesService, mediaService) {
        this.blogNotesService = blogNotesService;
        this.mediaService = mediaService;
    }
    createWithMedia(createBlogNoteFormDataDto, files, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogNoteResponse = yield this.blogNotesService.create(createBlogNoteFormDataDto, req.user.id);
            const mediaResponse = yield this.mediaService.createObjects(req.user.username, createBlogNoteFormDataDto.id, files);
            return Object.assign(Object.assign({}, blogNoteResponse), { mediaResponse });
        });
    }
    findAll(req) {
        return this.blogNotesService.findAll(req.user.id);
    }
    updateWithMedia(blogNoteId, updateBlogNoteFormDataDto, files, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { deleteFiles } = updateBlogNoteFormDataDto, updateBlogNoteFormData = __rest(updateBlogNoteFormDataDto, ["deleteFiles"]);
            const deleteFilesArr = deleteFiles ? deleteFiles.split('/') : null;
            const blogNoteResponse = yield this.blogNotesService.update(blogNoteId, Object.assign(Object.assign({}, updateBlogNoteFormData), { userId: req.user.id }));
            let mediaCreateResponse;
            if (files.length !== 0) {
                mediaCreateResponse = yield this.mediaService.createObjects(req.user.username, blogNoteId, files);
            }
            let mediaDeleteResponse;
            if (deleteFilesArr) {
                mediaDeleteResponse = yield this.mediaService.deleteObjects(req.user.username, blogNoteId, deleteFilesArr);
            }
            return Object.assign(Object.assign({}, blogNoteResponse), { added: mediaCreateResponse, deleted: mediaDeleteResponse });
        });
    }
    remove(blogNoteId, body, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogNoteResponse = yield this.blogNotesService.remove(blogNoteId);
            const mediaResponse = yield this.mediaService.deleteObjects(req.user.username, blogNoteId, body.deleteFiles ? body.deleteFiles.split('/') : null);
            return Object.assign(Object.assign({}, blogNoteResponse), { deleted: mediaResponse });
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_note_dto_1.CreateBlogNoteFormDataDto, Array, Object]),
    __metadata("design:returntype", Promise)
], BlogNotesController.prototype, "createWithMedia", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BlogNotesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    (0, common_1.Put)(':blogNoteId'),
    __param(0, (0, common_1.Param)('blogNoteId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blog_note_dto_1.UpdateBlogNoteFormDataDto, Array, Object]),
    __metadata("design:returntype", Promise)
], BlogNotesController.prototype, "updateWithMedia", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('')),
    (0, common_1.Delete)(':blogNoteId'),
    __param(0, (0, common_1.Param)('blogNoteId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BlogNotesController.prototype, "remove", null);
BlogNotesController = __decorate([
    (0, common_1.Controller)('blog-notes'),
    __metadata("design:paramtypes", [blog_notes_service_1.BlogNotesService,
        media_service_1.MediaService])
], BlogNotesController);
exports.BlogNotesController = BlogNotesController;
//# sourceMappingURL=blog-notes.controller.js.map