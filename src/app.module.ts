import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogNotesModule } from './blog-notes/blog-notes.module';
import { BlogNote } from './blog-notes/entities/blog-note.entity';
import { Media } from './media/entities/media.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import 'dotenv/config';
import { User } from './users/entities/user.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
      entities: [BlogNote, Media, User],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '..', 'client', 'public'),
    // }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
