import {
  Body,
  Controller,
  Get,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':blogNoteId')
  findAllObjects(@Request() req, @Param() blogNoteId) {
    return this.mediaService.findAllObjects(
      req.user.username,
      blogNoteId.blogNoteId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('url/:blogNoteId/:fileName')
  fetchPresignedUrl(@Request() req, @Param() params) {
    return this.mediaService.fetchPresignedUrl(
      req.user.username,
      params.blogNoteId,
      params.fileName,
    );
  }
}
