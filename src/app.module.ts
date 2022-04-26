import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogNotesModule } from './blog-notes/blog-notes.module';
import { BlogNote } from './blog-notes/entities/blog-note.entity';
import 'dotenv/config';

@Module({
  imports: [
    BlogNotesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'root',
      entities: [BlogNote],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
