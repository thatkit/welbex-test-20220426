import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MediaService } from './media.service';

@Controller('files')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files'))
  @Post(':blogNoteTitle')
  create(
    @Request() req,
    @Param() blogNoteTitle,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    // console.log('co blogNoteTitle:', blogNoteTitle)
    return this.mediaService.createObjects(
      req.user.username,
      blogNoteTitle.blogNoteTitle,
      files,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':blogNoteTitle')
  findAllObjects(@Request() req, @Param() blogNoteTitle) {
    // console.log('co blogNoteTitle:', blogNoteTitle);
    return this.mediaService.findAllObjects(
      req.user.username,
      blogNoteTitle.blogNoteTitle,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':blogNoteTitle')
  delete(@Request() req, @Param() blogNoteTitle, @Body() fileNames) {
    return this.mediaService.deleteObjects(
      req.user.username,
      blogNoteTitle.blogNoteTitle,
      fileNames.fileNames,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('url/:blogNoteTitle')
  fetchPresignedUrl(@Request() req, @Param() blogNoteTitle, @Body() fileName) {
    return this.mediaService.fetchPresignedUrl(
      req.user.username,
      blogNoteTitle.blogNoteTitle,
      fileName.fileName,
    );
  }
}
