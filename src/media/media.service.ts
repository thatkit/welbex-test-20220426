import { Injectable } from '@nestjs/common';
import { FilebaseCustomClient } from './FilebaseCustomClient';

@Injectable()
export class MediaService {
  constructor(private readonly fbClient: FilebaseCustomClient) {}

  createObjects(username, blogNoteTitle, files) {
    // console.log('se blogNoteTitle:', blogNoteTitle)
    return this.fbClient.createObjects(username, blogNoteTitle, files);
  }

  findAllObjects(username: string, blogNoteTitle: string) {
    // console.log('se blogNoteTitle:', blogNoteTitle)
    return this.fbClient.findAllObjects(username, blogNoteTitle);
  }

  deleteObjects(username: string, blogNoteTitle: string, fileNames) {
    return fileNames.map(
      ({ fileName }) => `DELETE ${username}/${blogNoteTitle}/${fileName}`,
    );
  }
}
