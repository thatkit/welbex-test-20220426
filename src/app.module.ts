import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogNotesModule } from './blog-notes/blog-notes.module';

@Module({
  imports: [BlogNotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
