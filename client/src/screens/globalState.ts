import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { User, BlogNote } from './types';
import { findAllJson } from '../mockupData/findAll';
import { mockupUrl } from '../mockupData/url';

export class GlobalState {
  user: User = {
    username: 'client1',
    password: 'pass1',
  };

  accessToken: string = '';

  blogNotes: BlogNote[] = findAllJson;

  constructor() {
    makeAutoObservable(this);
  }

  /* ~~~ FOR AUTH SCREEN ~~~ */

  registerUser(newUser: User) {
    // # then client.login() --> save accessToken
  }

  loginUser(user: User) {
    // # client.login() --> save accessToken
  }

  /* ~~~ FOR BLOGNOTES SCREEN ~~~ */

  get getUsername() {
    return this.user.username;
  }

  get getBlogNotes() {
    return this.blogNotes;
  }

  setBlogNotes(blogNotes: BlogNote[]) {
    this.blogNotes = blogNotes;
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
