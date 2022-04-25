import { Test, TestingModule } from '@nestjs/testing';
import { BlogNotesService } from './blog-notes.service';

describe('BlogNotesService', () => {
  let service: BlogNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogNotesService],
    }).compile();

    service = module.get<BlogNotesService>(BlogNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
