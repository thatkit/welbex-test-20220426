import { Injectable } from '@nestjs/common';
import { CreateBlogNoteDto } from './dto/create-blog-note.dto';
import { UpdateBlogNoteDto } from './dto/update-blog-note.dto';

@Injectable()
export class BlogNotesService {
  create(createBlogNoteDto: CreateBlogNoteDto) {
    return 'This action adds a new blogNote';
  }

  findAll() {
    return `This action returns all blogNotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blogNote`;
  }

  update(id: number, updateBlogNoteDto: UpdateBlogNoteDto) {
    return `This action updates a #${id} blogNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogNote`;
  }
}
