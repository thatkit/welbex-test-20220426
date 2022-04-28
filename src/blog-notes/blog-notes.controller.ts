import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { BlogNotesService } from './blog-notes.service';
import { CreateBlogNoteDto } from './dto/create-blog-note.dto';
import { UpdateBlogNoteDto } from './dto/update-blog-note.dto';

@Controller('blog-notes')
export class BlogNotesController {
  constructor(private readonly blogNotesService: BlogNotesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBlogNoteDto: CreateBlogNoteDto, @Request() req) {
    console.log(req.user);
    return this.blogNotesService.create({ ...createBlogNoteDto, user: req.user });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.blogNotesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogNotesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlogNoteDto: UpdateBlogNoteDto,
  ) {
    return this.blogNotesService.update(+id, updateBlogNoteDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogNotesService.remove(+id);
  }
}
function user(arg0: any, user: any, user: any) {
  throw new Error('Function not implemented.');
}
