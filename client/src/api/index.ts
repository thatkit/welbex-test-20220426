import { BlogNoteInput, FetchOptions, User } from '../types';
import Cookies from 'js-cookie';

export class apiClient {
  baseUrl: string = 'http://localhost:3001';
  isLoggedIn: boolean = false;
  headers = new Headers();

  setOptions(options?: FetchOptions) {
    return {
      method: options?.method || 'GET',
      headers: {
        ...this.headers,
        'Content-Type': options?.contentType || 'application/json',
        Authorization: `Bearer ${options?.accessToken}`,
      },
      body: JSON.stringify(options?.body) || null, // # should be different
    };
  }

  /* ~~~ FOR AUTH SCREEN ~~~ */

  async registerUser(newUser: User) {
    try {
      const response = await fetch(
        `${this.baseUrl}/auth/register/`,
        this.setOptions({
          method: 'POST',
          body: newUser,
        }),
      );
      // console.log('res original:', await response.json());
      const parsed = await response.json();
      // console.log('res parsed:', parsed);
      return parsed;
    } catch (err) {
      console.log(err); // # need a better error handler
    }
  }

  async loginUser(user: User) {
    try {
      const response = await fetch(
        `${this.baseUrl}/auth/login/`,
        this.setOptions({
          method: 'POST',
          body: user,
        }),
      );
      // console.log('res original:', await response.json());
      const parsed = await response.json();
      // console.log('res parsed:', parsed);
      return parsed;
    } catch (err) {
      console.log(err); // # need a better error handler
    }
  }

  /* ~~~ FOR BLOGNOTES SCREEN ~~~ */

  async getUsername() {
    try {
      const response = await fetch(
        `${this.baseUrl}/auth/login/`,
        this.setOptions({
          accessToken: Cookies.get('accessToken'),
        }),
      );
      // console.log('res original:', response);
      // # 1 problem here
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      const parsed = await response.json();
      // console.log('res parsed:', parsed);
      return parsed;
    } catch (err) {
      console.log(err); // # need a better error handler
    }
  }

  async getBlogNotes() {
    try {
      const response = await fetch(
        `${this.baseUrl}/blog-notes`,
        this.setOptions({
          accessToken: Cookies.get('accessToken'),
        }),
      );
      // console.log('res original:', response);

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      const parsed = await response.json();
      // console.log('res parsed:', parsed);
      return parsed;
    } catch (err) {
      console.log(err); // # need a better error handler
    }
  }

  async saveBlogNote(blogNote: BlogNoteInput) {
    try {
      const response = await fetch(
        `${this.baseUrl}/blog-notes`,
        this.setOptions({
          method: 'POST',
          accessToken: Cookies.get('accessToken'),
          body: blogNote,
        }),
      );
      // console.log('res original:', response);

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      const parsed = await response.json();
      // console.log('res parsed:', parsed);
      return parsed;
    } catch (err) {
      console.log(err); // # need a better error handler
    }
  }
}
