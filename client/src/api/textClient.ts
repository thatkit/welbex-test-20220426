import { BlogNoteInput, FetchOptions, User } from '../types';
import Cookies from 'js-cookie';
import { convertJsObjToFormData } from '../tools/convertJsObjToFormData';

export class apiTextClient {
  baseUrl: string = 'http://localhost:3001';
  isLoggedIn: boolean = false;
  headers = new Headers();

  setOptions(options?: FetchOptions) {
    return {
      method: options?.method || 'GET',
      headers: {
        ...this.headers,
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${options?.accessToken}`,
      },
      body: options?.body, // # should be different
    };
  }

  /* ~~~ FOR AUTH SCREEN ~~~ */

  async registerUser(newUser: User) {
    try {
      const response = await fetch(
        `${this.baseUrl}/auth/register/`,
        this.setOptions({
          method: 'POST',
          body: JSON.stringify(newUser),
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
          body: JSON.stringify(user),
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

  /* ~~~ FOR BLOGNOTES CRUD ~~~ */

  async saveBlogNote(blogNote: BlogNoteInput) {
    try {
      const response = await fetch(
        `${this.baseUrl}/blog-notes`,
        this.setOptions({
          method: 'POST',
          accessToken: Cookies.get('accessToken'),
          body: convertJsObjToFormData(blogNote),
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

  async updateBlogNote(blogNote: BlogNoteInput, blogNoteId: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/blog-notes/${blogNoteId}`,
        this.setOptions({
          method: 'PUT',
          accessToken: Cookies.get('accessToken'),
          body: convertJsObjToFormData(blogNote),
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

  async deleteBlogNote(blogNote: BlogNoteInput, blogNoteId: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/blog-notes/${blogNoteId}`,
        this.setOptions({
          method: 'DELETE',
          accessToken: Cookies.get('accessToken'),
          body: convertJsObjToFormData(blogNote),
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
