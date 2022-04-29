import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Media } from 'src/media/entities/media.entity';
import { mapMediaRefs } from 'src/tools/mapMediaRefs';
import {
  createQueryBuilder,
  DeleteResult,
  Repository,
  UpdateResult,
} from 'typeorm';
import { CreateBlogNoteDto } from './dto/create-blog-note.dto';
import { UpdateBlogNoteDto } from './dto/update-blog-note.dto';
import { BlogNote } from './entities/blog-note.entity';

@Injectable()
export class BlogNotesService {
  constructor(
    @InjectRepository(BlogNote)
    private blogNoteRepository: Repository<BlogNote>,

    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}

  async create(
    createBlogNoteDto: CreateBlogNoteDto,
    userId: string,
  ): Promise<BlogNote> {
    const { mediaRefs, ...blogNoteData } = createBlogNoteDto;
    // saving blogNote
    const blogNoteResponse = await this.blogNoteRepository.save({
      ...blogNoteData,
      userId,
    });
    // saving media related to blogNote
    await this.mediaRepository.save(
      mapMediaRefs(mediaRefs, blogNoteResponse.id),
    );
    return blogNoteResponse;
  }

  async findAll(userId: string): Promise<BlogNote[]> {
    return this.blogNoteRepository.find({ userId });
  }

  async findOne(id: string): Promise<any> {
    // return this.blogNoteRepository.findOne(id);
    return await this.blogNoteRepository
      .createQueryBuilder('blog_note')
      .leftJoinAndSelect('blog_note.media', 'media')
      .where('blog_note.id = :id', { id })
      .getOne();
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
