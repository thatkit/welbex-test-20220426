import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { BlogNote } from '../types';
import { mockupUrl } from '../mockupData/url';
import { apiTextClient } from '../api/textClient';
import { apiMediaClient } from '../api/mediaClient';

export class GlobalState {
  textClient;
  mediaClient;
  blogNotes: BlogNote[] = [];
  username: string | undefined = '';

  blogNoteInputs = {
    id: '',
    title: '',
    message: '',
    mediaRefs: [],
  };

  mediaInput: any;

  constructor() {
    makeAutoObservable(this);
    this.textClient = new apiTextClient();
    this.mediaClient = new apiMediaClient();
  }

  /* ~~~ FORM INPUT CONTROL ~~~ */

  setIdInput(id: string) {
    if (!Boolean(this.blogNoteInputs.id)) return this.blogNoteInputs.id = id;
    console.log('setIdInput');
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

  async setMediaInput(convertedFiles: any) {
    this.mediaInput = await convertedFiles;
  }

  /* ~~~ TEXTUAL CRUD ~~~ */

  async setBlogNotes() {
    const response = await this.textClient.getBlogNotes();
    // console.log('state: ', response);
    this.blogNotes = await response;
  }

  async saveBlogNote() {
    await this.textClient.saveBlogNote(this.blogNoteInputs);
    await this.setBlogNotes();
  }

  async updateBlogNote() {
    await this.textClient.updateBlogNote(this.blogNoteInputs, this.blogNoteInputs.id);
    await this.setBlogNotes();
  }

  async deleteBlogNote() {
    await this.textClient.deleteBlogNote(this.blogNoteInputs.id);
    await this.setBlogNotes();
  }

  fetchPresignedUrl(blogNoteTitle: string, fileName: string) {
    return mockupUrl;
  }

  /* ~~~ MEDIA CR*D ~~~ */

  async saveMedia() {
    console.log('media:', this.mediaInput);
    console.log('blogNoteId:', this.blogNoteInputs.id);
    await this.mediaClient.saveMedia(this.mediaInput, this.blogNoteInputs.id);
  }

  /* ~~~ SETTERS & GETTERS ~~~ */

  get getUsername(): string | undefined {
    return this.username;
  }

  get getBlogNotes() {
    return this.blogNotes.slice().sort(
      (prev, next) =>
      new Date(next.date).getTime() - new Date(prev.date).getTime(),
    );
  }
}

export const GlobalStateContext = createContext(new GlobalState());
export const GlobalStateProvider = GlobalStateContext.Provider;

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
