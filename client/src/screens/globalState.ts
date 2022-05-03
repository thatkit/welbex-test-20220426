import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { User, BlogNote } from './types';
import { findAllJson } from '../mockupData/findAll';
import { mockupUrl } from '../mockupData/url';
import { apiClient } from '../apiClient';
import Cookies from 'js-cookie';

export class GlobalState {
  client;
  isAuth;

  user: User = {
    username: '',
    password: '',
  };

  blogNotes: BlogNote[] = findAllJson;

  constructor() {
    makeAutoObservable(this);
    this.client = new apiClient();
    this.isAuth = false;
  }

  /* ~~~ FOR AUTH SCREEN ~~~ */

  setUsername(username: string) {
    this.user.username = username;
    // console.log(this.user);
  }

  setPassword(password: string) {
    this.user.password = password;
    // console.log(this.user);
  }

  registerUser() {
    this.client.registerUser(this.user);
  }

  loginUser() {
    this.client.loginUser(this.user);
    this.getAuth();
  }

  getAuth(): boolean | undefined {
    if (Cookies.get('accessToken')) {
      this.isAuth = true;
      console.log('cookie', this.isAuth)
    }
    return this.isAuth;
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
