import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateBlogNoteDto } from './dto/create-blog-note.dto';
import { UpdateBlogNoteDto } from './dto/update-blog-note.dto';
import { BlogNote } from './entities/blog-note.entity';

@Injectable()
export class BlogNotesService {
  constructor(
    @InjectRepository(BlogNote)
    private blogNoteRepository: Repository<BlogNote>,
  ) {}

  async create(createBlogNoteDto: CreateBlogNoteDto): Promise<BlogNote> {
    return this.blogNoteRepository.save(createBlogNoteDto);
  }

  async findAll(): Promise<BlogNote[]> {
    return this.blogNoteRepository.find();
  }

  async findOne(id: number): Promise<BlogNote> {
    return this.blogNoteRepository.findOne(id);
  }

  async update(
    id: number,
    updateBlogNoteDto: UpdateBlogNoteDto,
  ): Promise<UpdateResult> {
    return this.blogNoteRepository.update(id, updateBlogNoteDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.blogNoteRepository.delete(id);
  }
}
