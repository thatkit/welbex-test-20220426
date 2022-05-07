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
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MediaService } from 'src/media/media.service';
import { BlogNotesService } from './blog-notes.service';
import {
  CreateBlogNoteDto,
  CreateBlogNoteFormDataDto,
} from './dto/create-blog-note.dto';
import { UpdateBlogNoteDto } from './dto/update-blog-note.dto';

@Controller('blog-notes')
export class BlogNotesController {
  constructor(
    private readonly blogNotesService: BlogNotesService,
    private readonly mediaService: MediaService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files'))
  @Post('test')
  async createWithMedia(
    @Body() createBlogNoteFormDataDto: CreateBlogNoteFormDataDto,
    @UploadedFiles() files: Express.Multer.File[],
    @Request() req,
  ) {
    const blogNoteResponse = await this.blogNotesService.create(
      createBlogNoteFormDataDto,
      req.user.id,
    );
    const mediaResponse = await this.mediaService.createObjects(
      req.user.username,
      createBlogNoteFormDataDto.id,
      files,
    );
    return {
      ...blogNoteResponse,
      mediaResponse,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBlogNoteDto: CreateBlogNoteDto, @Request() req) {
    // console.log('create co: ', createBlogNoteDto, req.user.id);
    return this.blogNotesService.create(createBlogNoteDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    // console.log('findAll co: ', req.user.id);
    return this.blogNotesService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.blogNotesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlogNoteDto: UpdateBlogNoteDto,
    @Request() req,
  ) {
    return this.blogNotesService.update(id, {
      ...updateBlogNoteDto,
      userId: req.user.id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogNotesService.remove(id);
  }
}
