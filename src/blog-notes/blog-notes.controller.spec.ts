import { Test, TestingModule } from '@nestjs/testing';
import { BlogNotesController } from './blog-notes.controller';
import { BlogNotesService } from './blog-notes.service';

describe('BlogNotesController', () => {
  let controller: BlogNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogNotesController],
      providers: [BlogNotesService],
    }).compile();

    controller = module.get<BlogNotesController>(BlogNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
