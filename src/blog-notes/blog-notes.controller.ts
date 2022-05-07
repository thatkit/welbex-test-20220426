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
import {
  UpdateBlogNoteDto,
  UpdateBlogNoteFormDataDto,
} from './dto/update-blog-note.dto';

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
  @Get('test')
  findAll(@Request() req) {
    return this.blogNotesService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('addFiles'))
  @Put('test/:blogNoteId')
  async updateWithMedia(
    @Param('blogNoteId') blogNoteId: string,
    @Body() updateBlogNoteFormDataDto: UpdateBlogNoteFormDataDto,
    @UploadedFiles() addFiles: Express.Multer.File[],
    @Request() req,
  ) {
    const { deleteFiles, ...updateBlogNoteFormData } =
      updateBlogNoteFormDataDto;
    const deleteFilesArr = deleteFiles ? deleteFiles.split('/') : null;
    console.log('updateBlogNoteFormData:', updateBlogNoteFormData);
    console.log('deleteFiles:', deleteFilesArr);
    console.log('addFiles:', addFiles);

    const blogNoteResponse = await this.blogNotesService.update(blogNoteId, {
      ...updateBlogNoteFormData,
      userId: req.user.id,
    });

    let mediaCreateResponse;
    if (addFiles.length !== 0) {
      mediaCreateResponse = await this.mediaService.createObjects(
        req.user.username,
        blogNoteId,
        addFiles,
      );
    }

    let mediaDeleteResponse;
    if (deleteFilesArr) {
      mediaDeleteResponse = await this.mediaService.deleteObjects(
        req.user.username,
        blogNoteId,
        deleteFilesArr,
      );
    }

    return {
      ...blogNoteResponse,
      added: mediaCreateResponse,
      deleted: mediaDeleteResponse,
    };
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
