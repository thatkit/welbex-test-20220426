import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { BlogNote, Media } from '../../types';
import { mockupUrl } from '../../mockupData/url';
import { apiClient } from '../../api';
import { apiMediaClient } from '../../api/mediaClient';
import { log } from '../../tools/log';

export class GlobalState {
  client;
  mediaClient;

  blogNotes: BlogNote[] = [];

  blogNoteMedia: Media[] = [];

  blogNoteInputs = {
    id: '',
    title: '',
    message: '',
    files: [],
    deleteFiles: [''],
  };

  constructor() {
    makeAutoObservable(this);
    this.client = new apiClient();
    this.mediaClient = new apiMediaClient();
  }

  /* ~~~ SETTERS ~~~ */

  async setBlogNotes() {
    this.blogNotes = await this.fetchAllBlogNotes();
  }

  async setMedia(blogNoteId: string) {
    this.blogNoteMedia = await this.fetchBlogNoteMedia(blogNoteId);
  }

  /* ~~~ GETTERS ~~~ */

  get getBlogNotes(): BlogNote[] {
    return this.blogNotes
      .slice()
      .sort(
        (prev, next) =>
          new Date(next.date).getTime() - new Date(prev.date).getTime(),
      );
  }

  get getMedia(): Media[] {
    return this.blogNoteMedia;
  }

  /* ~~~ FORM INPUT CONTROL ~~~ */

  setIdInput(id: string) {
    if (!Boolean(this.blogNoteInputs.id)) return (this.blogNoteInputs.id = id);
  }

  emptyIdInput() {
    this.blogNoteInputs.id = '';
  }

  setTitleInput(title: string) {
    this.blogNoteInputs.title = title;
  }

  setMessageInput(message: string) {
    this.blogNoteInputs.message = message;
  }

  async setFilesInput(convertedFiles: any) {
    this.blogNoteInputs.files = await convertedFiles;
  }

  setDeleteFilesInput() {
    const filenames = this.blogNoteMedia.map((media) => media.originalFilename);
    this.blogNoteInputs.deleteFiles = filenames;
  }

  /* ~~~ BLOGNOTES CRUD ~~~ */

  // CREATE

  async saveBlogNote() {
    const { deleteFiles, ...blogNoteInputWithoutDeleteFiles } = this.blogNoteInputs;
    await this.client.saveBlogNote(blogNoteInputWithoutDeleteFiles);
  }

  // READ

  async fetchAllBlogNotes() {
    return await this.client.getBlogNotes();
  }

  async fetchBlogNoteMedia(blogNoteId: string) {
    const keys = await this.fetchOneBlogNoteMedia(blogNoteId);
    const originalFilenames = keys.map((key: string) =>
      key.slice(key.lastIndexOf('/') + 1),
    );
    const blogNoteMedia: Media[] = await Promise.all(
      originalFilenames.map(async (filename: string) => {
        const urlObj = await this.fetchOneMediaUrl(blogNoteId, filename);
        return {
          originalFilename: filename,
          url: urlObj.url,
        };
      }),
    );
    return blogNoteMedia;
  }

  async fetchOneBlogNoteMedia(blogNoteId: string) {
    return await this.client.getBlogNoteMedia(blogNoteId);
  }

  async fetchOneMediaUrl(blogNoteId: string, mediaOriginalname: string) {
    return await this.client.getBlogNoteMediaUrl(blogNoteId, mediaOriginalname);
  }

  // UPDATE

  async updateBlogNote() {
    await this.client.updateBlogNote(
      this.blogNoteInputs,
      this.blogNoteInputs.id,
    );
    await this.setBlogNotes();
  }

  // DELETE

  async deleteBlogNote() {
    await this.client.deleteBlogNote(
      this.blogNoteInputs.deleteFiles,
      this.blogNoteInputs.id,
    );
    await this.setBlogNotes();
  }
}

export const GlobalStateContext = createContext(new GlobalState());
export const GlobalStateProvider = GlobalStateContext.Provider;

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
