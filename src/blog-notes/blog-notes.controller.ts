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
    return this.blogNotesService.create({
      ...createBlogNoteDto,
      userId: req.user.id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.blogNotesService.findAll(req.user.id);
  }

  // @ security risk: can retrieve an other user's item
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogNotesService.findOne(+id);
  }

  // @ security risk: can update an other user's item
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlogNoteDto: UpdateBlogNoteDto,
    @Request() req,
  ) {
    return this.blogNotesService.update(+id, {
      ...updateBlogNoteDto,
      userId: req.user.id,
    });
  }

  // @ security risk: can remove an other user's item
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogNotesService.remove(+id);
  }
}

// # req.user.id === repository,usrId?