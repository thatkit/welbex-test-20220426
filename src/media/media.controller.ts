import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateObjectDto } from './dto/create-object.dto';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  create(@Body() createObjectDto: CreateObjectDto) {
    return this.mediaService.createObject(createObjectDto);
  }

  @Get()
  findAllObjects() {
    return this.mediaService.findAllObjects();
  }
}
