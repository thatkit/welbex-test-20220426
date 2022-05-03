import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { User, BlogNote } from './types';
import { findAllJson } from '../mockupData/findAll';
import { mockupUrl } from '../mockupData/url';
import { apiClient } from '../apiClient';

export class GlobalState {
  client;

  user: User = {
    username: '',
    password: '',
  };

  accessToken: string = '';

  blogNotes: BlogNote[] = findAllJson;

  constructor() {
    makeAutoObservable(this);
    this.client = new apiClient();
  }

  clientCheck(checkVal: any) {
    this.client.clientTest(checkVal);
  }

  getHello() {
    this.client.getHello();
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
    this.client.register(this.user);
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
