import Cookies from 'js-cookie';
import { BlogNoteInput, BlogNoteInputWithoutId, User } from '../types';
import { convertJsObjToFormData } from '../tools/convertJsObjToFormData';

export class apiClient {
  baseUrl: string = 'http://localhost:3000';

  /* ~~~ FOR AUTH SCREEN ~~~ */

  async registerUser(newUser: User) {
    try {
      const response = await fetch(`${this.baseUrl}/auth/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
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
      const response = await fetch(`${this.baseUrl}/auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
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
      const response = await fetch(`${this.baseUrl}/auth/login/`, {
        headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` },
      });
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

  /* ~~~ FOR BLOGNOTES CRUD ~~~ */

  async saveBlogNote(blogNote: BlogNoteInput) {
    try {
      const response = await fetch(`${this.baseUrl}/blog-notes`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` },
        body: convertJsObjToFormData(blogNote),
      });
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
      const response = await fetch(`${this.baseUrl}/blog-notes`, {
        headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` },
      });
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

  async getBlogNoteMedia(blogNoteId: string) {
    try {
      const response = await fetch(`${this.baseUrl}/media/${blogNoteId}`, {
        headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` },
      });
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

  async getBlogNoteMediaUrl(blogNoteId: string, mediaOriginalname: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/media/url/${blogNoteId}/${mediaOriginalname}`,
        {
          headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` },
        },
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

  async updateBlogNote(blogNote: BlogNoteInputWithoutId, blogNoteId: string) {
    try {
      const response = await fetch(`${this.baseUrl}/blog-notes/${blogNoteId}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` },
        body: convertJsObjToFormData(blogNote),
      });
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

  async deleteBlogNote(deleteFiles: string, blogNoteId: string) {
    const formData = new FormData();
    formData.append('deleteFiles', deleteFiles);
    try {
      const response = await fetch(`${this.baseUrl}/blog-notes/${blogNoteId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` },
        body: formData,
      });
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
