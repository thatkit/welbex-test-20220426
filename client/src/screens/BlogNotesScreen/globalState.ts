import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { BlogNote, BlogNotesMedia, Media } from '../../types';
import { apiClient } from '../../api';
import { apiMediaClient } from '../../api/mediaClient';
import { log } from '../../tools/log';

export class GlobalState {
  client;
  mediaClient;

  blogNotes: BlogNote[] = [];

  blogNotesMedia: BlogNotesMedia[] = [];

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

  set setterBlogNotes(blogNotes: BlogNote[]) {
    this.blogNotes = blogNotes;
  }

  async setBlogNotes() {
    this.setterBlogNotes = await this.fetchAllBlogNotes();
  }

  async setMedia() {
    this.getBlogNotes.forEach(async (blogNote) => {
      this.blogNotesMedia.push({
        blogNoteId: blogNote.id,
        media: await this.fetchBlogNoteMedia(blogNote.id),
      });
    });
  }

  async initialise() {
    await this.setBlogNotes();
    await this.setMedia();
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

  getOneBlogNoteMedia(blogNoteId: string): BlogNotesMedia | undefined {
    const blogNoteMedia = this.blogNotesMedia.find(
      (blogNote) => blogNote.blogNoteId === blogNoteId,
    );
    return blogNoteMedia;
  }

  hasMedia(blogNoteId: string) {
    const blogNote = this.getOneBlogNoteMedia(blogNoteId);
    if (blogNote) {
      return Boolean(blogNote.media);
    }
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

  setDeleteFilesInput(blogNoteId: string) {
    const blogNoteMedia = this.blogNotesMedia.filter(
      (blogNote) => blogNote.blogNoteId === blogNoteId,
    )[0];
    const filenames = blogNoteMedia.media.map((file) => file.originalFilename);
    this.blogNoteInputs.deleteFiles = filenames;
  }

  /* ~~~ BLOGNOTES CRUD ~~~ */

  // CREATE

  async saveBlogNote() {
    const { deleteFiles, ...blogNoteInputWithoutDeleteFiles } =
      this.blogNoteInputs;
    await this.client.saveBlogNote(blogNoteInputWithoutDeleteFiles);
  }

  // READ

  async fetchAllBlogNotes() {
    return await this.client.getBlogNotes();
  }

  async fetchBlogNoteMedia(blogNoteId: string): Promise<Media[]> {
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

  async fetchOneBlogNoteMedia(blogNoteId: string): Promise<string[]> {
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
