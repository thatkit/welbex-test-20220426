import { Injectable } from '@nestjs/common';
import { FilebaseCustomClient } from './FilebaseCustomClient';

@Injectable()
export class MediaService {
  private readonly fbClient: FilebaseCustomClient;

  async createObject(file) {
    return this.fbClient.createObject(file);
  }

  async findAllObjects(blogNoteId: string) {
    return await this.fbClient.findAllObjects();
  }

  async deleteObject(mediaRef: string) {
    return 'hello im deleted';
  }
}
