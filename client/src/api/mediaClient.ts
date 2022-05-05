import { FetchOptions } from '../types';
import Cookies from 'js-cookie';

export class apiTextClient {
  baseUrl: string = 'http://localhost:3001/files';
  isLoggedIn: boolean = false;
  headers = new Headers();

  setOptions(options?: FetchOptions) {
    return {
      method: options?.method || 'GET',
      headers: {
        ...this.headers,
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${options?.accessToken}`,
      },
      body: options?.body, // # ?
    };
  }

  /* ~~~ FOR MEDIA CR*D ~~~ */

  async saveMedia(blogNoteId: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/${blogNoteId}`,
        this.setOptions({
          method: 'POST',
          accessToken: Cookies.get('accessToken'),
          body: ['blob | buffer?'], // # ?
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
