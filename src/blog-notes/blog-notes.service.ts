import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogNoteDto } from './dto/create-blog-note.dto';
import { UpdateBlogNoteDto } from './dto/update-blog-note.dto';
import { BlogNote } from './entities/blog-note.entity';

@Injectable()
export class BlogNotesService {
  constructor(
    @InjectRepository(BlogNote)
    private blogNoteRepository: Repository<BlogNote>,
  ) {}

  create(createBlogNoteDto: CreateBlogNoteDto) {
    console.log('se:', createBlogNoteDto);
    // console.log(this.blogNoteRepository)
    return this.blogNoteRepository.create(createBlogNoteDto);
  }

  findAll() {
    return this.blogNoteRepository.find();
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
