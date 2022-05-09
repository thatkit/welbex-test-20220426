import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { BlogNote } from '../../types';
import { mockupUrl } from '../../mockupData/url';
import { apiClient } from '../../api';
import { apiMediaClient } from '../../api/mediaClient';

export class GlobalState {
  client;
  mediaClient;
  blogNotes: BlogNote[] = [];
  username: string | undefined = '';

  blogNoteInputs = {
    id: '',
    title: '',
    message: '',
    files: [],
    deleteFiles: [],
  };

  constructor() {
    makeAutoObservable(this);
    this.client = new apiClient();
    this.mediaClient = new apiMediaClient();
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

  /* ~~~ TEXTUAL CRUD ~~~ */

  async setBlogNotes() {
    const response = await this.client.getBlogNotes();
    this.blogNotes = await response;
  }

  async saveBlogNote() {
    await this.client.saveBlogNote(this.blogNoteInputs);
  }

  async updateBlogNote() {
    await this.client.updateBlogNote(
      this.blogNoteInputs,
      this.blogNoteInputs.id,
    );
    await this.setBlogNotes();
  }

  async deleteBlogNote() {
    await this.client.deleteBlogNote(this.blogNoteInputs, this.blogNoteInputs.id);
    await this.setBlogNotes();
  }

  fetchPresignedUrl(blogNoteTitle: string, fileName: string) {
    return mockupUrl;
  }

  /* ~~~ SETTERS & GETTERS ~~~ */

  get getUsername(): string | undefined {
    return this.username;
  }

  get getBlogNotes() {
    return this.blogNotes
      .slice()
      .sort(
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
