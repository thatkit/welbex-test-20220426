import { Injectable } from '@nestjs/common';
import { FilebaseCustomClient } from './FilebaseCustomClient';

@Injectable()
export class MediaService {
  constructor(private readonly fbClient: FilebaseCustomClient) {}

  createObjects(username, blogNoteId, files) {
    // console.log('se blogNoteId:', blogNoteId)
    return this.fbClient.createObjects(username, blogNoteId, files);
  }

  findAllObjects(username: string, blogNoteId: string) {
    // console.log('se blogNoteId:', blogNoteId)
    return this.fbClient.findAllObjects(username, blogNoteId);
  }

  deleteObjects(username: string, blogNoteId: string, fileNames) {
    return this.fbClient.deleteObjects(username, blogNoteId, fileNames);
  }

  fetchPresignedUrl(username: string, blogNoteId: string, fileName) {
    return this.fbClient.fetchPresignedUrl(username, blogNoteId, fileName);
  }
}
