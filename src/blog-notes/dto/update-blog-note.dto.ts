import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
  CreateBlogNoteDto,
  CreateBlogNoteFormDataDto,
} from './create-blog-note.dto';

export class UpdateBlogNoteDto extends PartialType(CreateBlogNoteDto) {}
// # omitType remove title

export class UpdateBlogNoteFormDataDto {
  title?: string;
  message?: string;
  deleteFiles?: string[];
}
