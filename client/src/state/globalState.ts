import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { BlogNote } from '../types';
import { mockupUrl } from '../mockupData/url';
import { apiClient } from '../api';

export class GlobalState {
  client;
  blogNotes: BlogNote[] = [];
  username: string | undefined = '';

  blogNoteInputs = {
    title: '',
    message: '',
    mediaRefs: [],
  };

  constructor() {
    makeAutoObservable(this);
    this.client = new apiClient();
  }

  /* ~~~ FORM INPUT CONTROL ~~~ */

  setTitleInput(title: string) {
    this.blogNoteInputs.title = title;
  }

  setMessageInput(message: string) {
    this.blogNoteInputs.message = message;
  }

  /* ~~~ FOR BLOGNOTES SCREEN ~~~ */

  async setBlogNotes() {
    const response = await this.client.getBlogNotes();
    // console.log('state: ', response);
    this.blogNotes = await response;
  }

  async saveBlogNote() {
    const response = await this.client.saveBlogNote(this.blogNoteInputs);
    // console.log('newBlognote res: ', response);
    await this.setBlogNotes();
  }

  fetchPresignedUrl(blogNoteTitle: string, fileName: string) {
    return mockupUrl;
  }

  get getUsername(): string | undefined {
    return this.username;
  }

  /* ~~~ SETTERS & GETTERS ~~~ */

  get getBlogNotes() {
    return this.blogNotes;
  }

}

export const GlobalStateContext = createContext(new GlobalState());
export const GlobalStateProvider = GlobalStateContext.Provider;

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
