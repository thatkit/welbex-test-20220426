import { Injectable } from '@nestjs/common';
import { FilebaseCustomClient } from './FilebaseCustomClient';

@Injectable()
export class MediaService {
  constructor(private readonly fbClient: FilebaseCustomClient) {}

  createObjects(username, blogNoteId, files) {
    return this.fbClient.createObjects(username, blogNoteId, files);
  }

  async findAllObjects(username: string, blogNoteId: string) {
    const response = await this.fbClient.findAllObjects(username, blogNoteId);
    return response.map((media) => media.Key);
  }

  deleteObjects(username: string, blogNoteId: string, fileNames) {
    return this.fbClient.deleteObjects(username, blogNoteId, fileNames);
  }

  fetchPresignedUrl(username: string, blogNoteId: string, fileName) {
    return this.fbClient.fetchPresignedUrl(username, blogNoteId, fileName);
  }
}
