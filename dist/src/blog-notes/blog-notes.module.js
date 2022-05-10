"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogNotesModule = void 0;
const common_1 = require("@nestjs/common");
const blog_notes_service_1 = require("./blog-notes.service");
const blog_notes_controller_1 = require("./blog-notes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const blog_note_entity_1 = require("./entities/blog-note.entity");
const media_service_1 = require("../media/media.service");
const FilebaseCustomClient_1 = require("../media/FilebaseCustomClient");
const media_controller_1 = require("../media/media.controller");
let BlogNotesModule = class BlogNotesModule {
};
BlogNotesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([blog_note_entity_1.BlogNote])],
        controllers: [blog_notes_controller_1.BlogNotesController, media_controller_1.MediaController],
        providers: [blog_notes_service_1.BlogNotesService, media_service_1.MediaService, FilebaseCustomClient_1.FilebaseCustomClient],
    })
], BlogNotesModule);
exports.BlogNotesModule = BlogNotesModule;
//# sourceMappingURL=blog-notes.module.js.map