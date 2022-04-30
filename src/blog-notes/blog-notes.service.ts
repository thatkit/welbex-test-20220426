import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from 'src/media/entities/media.entity';
import { mapMediaRefs } from 'src/tools/mapMediaRefs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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
    const { mediaRefs: newMediaRefs, ...blogNoteData } = updateBlogNoteDto;

    if (newMediaRefs && newMediaRefs.length !== 0) {
      const prevMedia = await this.mediaRepository.find({ blogNoteId: id });
      const prevMediaRefs = prevMedia.map((obj) => obj.fileName);
      // check for deleted refs
      const deletedMediaRefs = prevMediaRefs.filter(
        (mediaRef) => !newMediaRefs.includes(mediaRef),
      );
      // console.log('deletedMediaRefs:', deletedMediaRefs);

      // check for new refs
      const addedMediaRefs = newMediaRefs.filter(
        (mediaRef) => !prevMediaRefs.includes(mediaRef),
      );
      // console.log('addedMediaRefs:', addedMediaRefs);

      if (deletedMediaRefs && deletedMediaRefs.length !== 0) {
        const deletedMediaIds = prevMedia
          .filter((media) => deletedMediaRefs.includes(media.fileName))
          .map((media) => media.id);
        this.mediaRepository.delete(deletedMediaIds);
      }

      if (addedMediaRefs && addedMediaRefs.length !== 0) {
        this.mediaRepository.save(mapMediaRefs(addedMediaRefs, id));
      }
    }

    return this.blogNoteRepository.update(id, blogNoteData);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.blogNoteRepository.delete(id);
  }
}
