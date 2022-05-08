import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BlogNoteWithUserIdDto } from './dto/blog-note-with-user-id.dto';
import { CreateBlogNoteFormDataDto } from './dto/create-blog-note.dto';
import { BlogNote } from './entities/blog-note.entity';

@Injectable()
export class BlogNotesService {
  constructor(
    @InjectRepository(BlogNote)
    private blogNoteRepository: Repository<BlogNote>,
  ) {}

  async create(
    createBlogNoteFormDataDto: CreateBlogNoteFormDataDto,
    userId: string,
  ): Promise<BlogNote> {
    const blogNoteResponse = await this.blogNoteRepository.save({
      ...createBlogNoteFormDataDto,
      userId,
    });
    return blogNoteResponse;
  }

  async findAll(userId: string): Promise<any> {
    return await this.blogNoteRepository
      .createQueryBuilder('blog_note')
      .where('blog_note.userId = :userId', { userId })
      .getMany();
  }

  async update(
    blogNoteId: string,
    blogNoteWithUserIdDto: BlogNoteWithUserIdDto,
  ): Promise<UpdateResult> {
    return this.blogNoteRepository.update(blogNoteId, blogNoteWithUserIdDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.blogNoteRepository.delete(id);
  }
}
