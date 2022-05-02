import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { BlogNote } from './types';
import { findAllJson } from '../mockupData/findAll';
import { mockupUrl } from '../mockupData/url';

export class GlobalState {
  user: {
    username: string;
    password: string;
  } = {
    username: 'client1',
    password: 'pass1',
  };

  blogNotes: BlogNote[] = findAllJson;

  constructor() {
    makeAutoObservable(this);
  }

  get getUsername() {
    return this.user.username;
  }

  get getBlogNotes() {
    return this.blogNotes;
  }

  setBlogNotes(blogNotes: BlogNote[]) {
    this.blogNotes = blogNotes;
  }

  updateBlogNotesWithMediaUrl() {
    const updatedBlogNotes = this.blogNotes.map((blogNote) => ({
      ...blogNote,
      media: blogNote.media?.map((file) => ({
        url: mockupUrl,
      })),
    }));
    this.setBlogNotes(updatedBlogNotes);
  }

  fetchPresignedUrl(blogNoteTitle: string, fileName: string) {
    return mockupUrl;
  }
}

export const GlobalStateContext = createContext(new GlobalState());
export const GlobalStateProvider = GlobalStateContext.Provider;

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
