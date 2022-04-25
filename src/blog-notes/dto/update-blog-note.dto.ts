import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogNoteDto } from './create-blog-note.dto';

export class UpdateBlogNoteDto extends PartialType(CreateBlogNoteDto) {}
