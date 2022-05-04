import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { User, BlogNote } from '../types';
import { findAllJson } from '../mockupData/findAll';
import { mockupUrl } from '../mockupData/url';
import { apiClient } from '../api';

export class GlobalState {
  client;
  blogNotes: BlogNote[] = findAllJson;
  username: string | undefined = '';

  constructor() {
    makeAutoObservable(this);
    this.client = new apiClient();
  }

  /* ~~~ FOR BLOGNOTES SCREEN ~~~ */

  get getBlogNotes() {
    return this.blogNotes;
  }

  setBlogNotes(blogNotes: BlogNote[]) {
    this.blogNotes = blogNotes;
  }

  fetchPresignedUrl(blogNoteTitle: string, fileName: string) {
    return mockupUrl;
  }

  get getUsername(): string | undefined {
    return this.username;
  }
}

export const GlobalStateContext = createContext(new GlobalState());
export const GlobalStateProvider = GlobalStateContext.Provider;

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
