import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  create(@UploadedFile() file: Express.Multer.File) {
    console.log('co:', file);
    return this.mediaService.createObject(file);
  }

  @Get()
  findAllObjects() {
    return this.mediaService.findAllObjects();
  }
}
