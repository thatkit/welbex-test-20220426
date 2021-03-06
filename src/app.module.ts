import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogNotesModule } from './blog-notes/blog-notes.module';
import { BlogNote } from './blog-notes/entities/blog-note.entity';
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
      entities: [BlogNote, User],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'build'),
    }),
  ],
})
export class AppModule {}
