/// <reference types="multer" />
import { MediaService } from 'src/media/media.service';
import { BlogNotesService } from './blog-notes.service';
import { CreateBlogNoteFormDataDto } from './dto/create-blog-note.dto';
import { UpdateBlogNoteFormDataDto } from './dto/update-blog-note.dto';
export declare class BlogNotesController {
    private readonly blogNotesService;
    private readonly mediaService;
    constructor(blogNotesService: BlogNotesService, mediaService: MediaService);
    createWithMedia(createBlogNoteFormDataDto: CreateBlogNoteFormDataDto, files: Express.Multer.File[], req: any): Promise<{
        mediaResponse: any[];
        id: string;
        date: string;
        title: string;
        message: string;
        user: import("../users/entities/user.entity").User;
        userId: string;
    }>;
    findAll(req: any): Promise<any>;
    updateWithMedia(blogNoteId: string, updateBlogNoteFormDataDto: UpdateBlogNoteFormDataDto, files: Express.Multer.File[], req: any): Promise<{
        added: any;
        deleted: any;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
    remove(blogNoteId: string, body: any, req: any): Promise<{
        deleted: any;
        raw: any;
        affected?: number;
    }>;
}
