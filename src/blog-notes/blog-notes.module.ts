import { Module } from '@nestjs/common';
import { BlogNotesService } from './blog-notes.service';
import { BlogNotesController } from './blog-notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogNote } from './entities/blog-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogNote])],
  controllers: [BlogNotesController],
  providers: [BlogNotesService],
})
export class BlogNotesModule {}
