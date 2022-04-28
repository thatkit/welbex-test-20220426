import { IntersectionType } from '@nestjs/mapped-types';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ReturnedUserDto } from 'src/users/dto/returned-user.dto';
import { CreateBlogNoteDto } from './create-blog-note.dto';

export class CreateBlogNoteDtoWithUserDto extends IntersectionType(
  CreateBlogNoteDto,
  CreateUserDto,
) {}
