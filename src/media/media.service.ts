import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilebaseCustomClient } from './AWSClient';
// import { s3Client } from './AWSClient';
import { CreateMediaDto } from './dto/create-media.dto';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,

    private readonly fbClient: FilebaseCustomClient
  ) {}

  async create(createMediaDto: CreateMediaDto) {
    // # logic for downloading, uploading to AWS, and removing from backend
    return this.mediaRepository.save(createMediaDto);
  }

  async createObject(file: Buffer) {
    console.log('se:', file)
    return this.fbClient.createObject(file);
  }

  async findAllObjects() {
    return await this.fbClient.findAllObjects();
  }
}
