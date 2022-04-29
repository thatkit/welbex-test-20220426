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

  async findAll(userId: string): Promise<BlogNote[]> {
    return this.blogNoteRepository.find({ userId });
  }

  async findOne(id: string): Promise<BlogNote> {
    return this.blogNoteRepository.findOne(id);
  }

  async update(
    id: string,
    updateBlogNoteDto: UpdateBlogNoteDto,
  ): Promise<UpdateResult> {
    return this.blogNoteRepository.update(id, updateBlogNoteDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.blogNoteRepository.delete(id);
  }
}
