import { Module } from '@nestjs/common';
import { BlogNotesService } from './blog-notes.service';
import { BlogNotesController } from './blog-notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogNote } from './entities/blog-note.entity';
import { MediaService } from 'src/media/media.service';
import { Media } from 'src/media/entities/media.entity';
import { FilebaseCustomClient } from 'src/media/FilebaseCustomClient';
import { MediaController } from 'src/media/media.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BlogNote, Media])],
  controllers: [BlogNotesController, MediaController],
  providers: [BlogNotesService, MediaService, FilebaseCustomClient],
})
export class BlogNotesModule {}
