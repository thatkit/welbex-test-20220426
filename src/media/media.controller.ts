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
  @Get('url/:blogNoteId')
  fetchPresignedUrl(@Request() req, @Param() blogNoteId, @Body() fileName) {
    return this.mediaService.fetchPresignedUrl(
      req.user.username,
      blogNoteId.blogNoteId,
      fileName.fileName,
    );
  }
}
