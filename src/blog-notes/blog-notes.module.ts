import { Module } from '@nestjs/common';
import { BlogNotesService } from './blog-notes.service';
import { BlogNotesController } from './blog-notes.controller';

@Module({
  controllers: [BlogNotesController],
  providers: [BlogNotesService]
})
export class BlogNotesModule {}
