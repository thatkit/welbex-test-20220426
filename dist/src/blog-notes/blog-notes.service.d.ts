import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BlogNoteWithUserIdDto } from './dto/blog-note-with-user-id.dto';
import { CreateBlogNoteFormDataDto } from './dto/create-blog-note.dto';
import { BlogNote } from './entities/blog-note.entity';
export declare class BlogNotesService {
    private blogNoteRepository;
    constructor(blogNoteRepository: Repository<BlogNote>);
    create(createBlogNoteFormDataDto: CreateBlogNoteFormDataDto, userId: string): Promise<BlogNote>;
    findAll(userId: string): Promise<any>;
    update(blogNoteId: string, blogNoteWithUserIdDto: BlogNoteWithUserIdDto): Promise<UpdateResult>;
    remove(id: string): Promise<DeleteResult>;
}
