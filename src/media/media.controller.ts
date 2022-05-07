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
  @Post(':blogNoteId')
  create(
    @Request() req,
    @Param() blogNoteId,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    console.log('co files:', files);
    return this.mediaService.createObjects(
      req.user.username,
      blogNoteId.blogNoteId,
      files,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':blogNoteId')
  findAllObjects(@Request() req, @Param() blogNoteId) {
    // console.log('co blogNoteId:', blogNoteId);
    return this.mediaService.findAllObjects(
      req.user.username,
      blogNoteId.blogNoteId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':blogNoteId')
  delete(@Request() req, @Param() blogNoteId, @Body() fileNames) {
    return this.mediaService.deleteObjects(
      req.user.username,
      blogNoteId.blogNoteId,
      fileNames.fileNames,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('url/:blogNoteId')
  fetchPresignedUrl(@Request() req, @Param() blogNoteId, @Body() fileName) {
    return this.mediaService.fetchPresignedUrl(
      req.user.username,
      blogNoteId.blogNoteId,
      fileName.fileName,
    );
  }
}
