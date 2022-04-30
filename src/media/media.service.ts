import { Injectable } from '@nestjs/common';
import { FilebaseCustomClient } from './FilebaseCustomClient';

@Injectable()
export class MediaService {
  constructor(private readonly fbClient: FilebaseCustomClient) {}

  createObjects(username, blogNoteTitle, files) {
    // console.log('se blogNoteTitle:', blogNoteTitle)
    return this.fbClient.createObjects(username, blogNoteTitle, files);
  }

  async findAllObjects(blogNoteId: string) {
    return await this.fbClient.findAllObjects();
  }

  async deleteObject(mediaRef: string) {
    return 'hello im deleted';
  }
}
