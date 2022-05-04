import { FetchOptions, User } from '../types';
import Cookies from 'js-cookie';

export class apiClient {
  baseUrl: string = 'http://localhost:3001';
  isLoggedIn: boolean = false;
  headers = new Headers();
  accessToken: string | undefined = Cookies.get('accessToken');

  setOptions(options?: FetchOptions) {
    return {
      method: options?.method || 'GET',
      headers: {
        ...this.headers,
        'Content-Type': options?.contentType || 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(options?.body) || null, // # should be different
    };
  }

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

  async getUsername() {
    try {
      const response = await fetch(
        `${this.baseUrl}/auth/login/`,
        this.setOptions({
          accessToken: this.accessToken,
        }),
      );
      console.log('res original:', response.text(), await response.text());

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      const parsed = await response.text();
      console.log('res parsed:', parsed);
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
          accessToken: this.accessToken,
        }),
      );
      console.log('res original:', response);

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
