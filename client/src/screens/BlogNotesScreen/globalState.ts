import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { BlogNote, BlogNotesMedia, Media } from '../../types';
import { apiClient } from '../../api';
import { log } from '../../tools/log';

export class GlobalState {
  client;

  _blogNotes: BlogNote[] = [];

  _blogNotesMedia: BlogNotesMedia[] = [];

  blogNoteInputs = {
    id: '',
    title: '',
    message: '',
    files: [],
    deleteFiles: '',
  };

  constructor() {
    makeAutoObservable(this);
    this.client = new apiClient();
  }

  async initialise() {
    await this.setBlogNotes();
    await this.setMedia();
  }

  /* ~~~ SETTERS ~~~ */

  set blogNotes(blogNotes: BlogNote[]) {
    this._blogNotes = blogNotes;
  }

  async setBlogNotes() {
    this.blogNotes = await this.fetchAllBlogNotes();
  }

  async setMedia() {
    this.blogNotes.forEach(async (blogNote) => {
      this._blogNotesMedia.push({
        blogNoteId: blogNote.id,
        media: await this.fetchBlogNoteMedia(blogNote.id),
      });
    });
  }

  /* ~~~ GETTERS ~~~ */

  get blogNotes(): BlogNote[] {
    return this._blogNotes;
  }

  get getSortedBlogNotes(): BlogNote[] {
    return this.blogNotes
      .slice()
      .sort(
        (prev, next) =>
          new Date(next.date).getTime() - new Date(prev.date).getTime(),
      );
  }

  getOneBlogNoteMedia(blogNoteId: string): BlogNotesMedia | undefined {
    const blogNoteMedia = this._blogNotesMedia.find(
      (blogNote) => blogNote.blogNoteId === blogNoteId,
    );
    return blogNoteMedia;
  }

  /* ~~~ BOOLEANS ~~~ */

  hasMedia(blogNoteId: string) {
    const blogNoteMedia = this.getOneBlogNoteMedia(blogNoteId);
    if (blogNoteMedia) {
      return Boolean(blogNoteMedia.media);
    }
  }

  /* ~~~ FORM INPUT CONTROL ~~~ */

  setIdInput(id: string) {
    if (!Boolean(this.blogNoteInputs.id)) return (this.blogNoteInputs.id = id);
  }

  emptyIdInput() {
    this.blogNoteInputs.id = '';
  }

  set titleInput(title: string) {
    this.blogNoteInputs.title = title;
  }

  set messageInput(message: string) {
    this.blogNoteInputs.message = message;
  }

  async setFilesInput(convertedFiles: any) {
    this.blogNoteInputs.files = await convertedFiles;
  }

  set deleteFilesInput(deleteFiles: string) {
    this.blogNoteInputs.deleteFiles = deleteFiles;
  }

  setDeleteFilesAll(blogNoteId: string) {
    const blogNoteMedia = this.getOneBlogNoteMedia(blogNoteId);
    if (blogNoteMedia?.media) {
      const filenames = blogNoteMedia.media.map(
        (file) => file.originalFilename,
      );
      this.deleteFilesInput = filenames.join('/');
    }
  }

  setDeleteFilesSeveral(originalFilename: string) {
    this.deleteFilesInput =
      this.blogNoteInputs.deleteFiles.length === 0
        ? originalFilename
        : this.blogNoteInputs.deleteFiles + `/${originalFilename}`;
    console.log(
      'this.blogNoteInputs.deleteFiles:',
      this.blogNoteInputs.deleteFiles,
    );
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
    // await this.client.updateBlogNote(
    //   this.blogNoteInputs,
    //   this.blogNoteInputs.id,
    // );
    // await this.setBlogNotes();
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
