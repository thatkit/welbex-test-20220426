import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  create(@UploadedFile() file: Express.Multer.File) {
    return this.mediaService.createObject(file);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAllObjects(blogNoteId: string) {
    return this.mediaService.findAllObjects(blogNoteId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param() mediaRef: string) {
    return 'hello deleted';
  }
}
