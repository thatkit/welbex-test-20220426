import { Module } from '@nestjs/common';
import { BlogNotesService } from './blog-notes.service';
import { BlogNotesController } from './blog-notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogNote } from './entities/blog-note.entity';
import { MediaService } from 'src/media/media.service';
import { Media } from 'src/media/entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogNote, Media])],
  controllers: [BlogNotesController],
  providers: [BlogNotesService, MediaService],
})
export class BlogNotesModule {}
