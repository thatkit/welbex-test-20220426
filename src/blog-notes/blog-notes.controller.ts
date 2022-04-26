import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BlogNotesService } from './blog-notes.service';
import { CreateBlogNoteDto } from './dto/create-blog-note.dto';
import { UpdateBlogNoteDto } from './dto/update-blog-note.dto';

@Controller('blog-notes')
export class BlogNotesController {
  constructor(private readonly blogNotesService: BlogNotesService) {}

  @Post()
  create(@Body() createBlogNoteDto: CreateBlogNoteDto) {
    return this.blogNotesService.create(createBlogNoteDto);
  }

  @Get()
  findAll() {
    return this.blogNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogNotesService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlogNoteDto: UpdateBlogNoteDto,
  ) {
    return this.blogNotesService.update(+id, updateBlogNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogNotesService.remove(+id);
  }
}
