import {
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
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MediaService } from './media.service';

@Controller('files')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files'))
  @Post(':blogNoteTitle')
  create(
    @UploadedFiles() files: Express.Multer.File[],
    @Request() req,
    @Param() blogNoteTitle,
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
    console.log('co blogNoteTitle:', blogNoteTitle);
    return this.mediaService.findAllObjects(
      req.user.username,
      blogNoteTitle.blogNoteTitle,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param() mediaRef: string) {
    return 'hello deleted';
  }
}
