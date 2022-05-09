import Cookies from 'js-cookie';

export class apiMediaClient {
  baseUrl: string = 'http://localhost:3001/media';
  isLoggedIn: boolean = false;
  headers = new Headers();

  setOptions(options?: any) {
    const formData = new FormData();
    formData.append('files', options?.body);
    return {
      method: options?.method || 'GET',
      headers: {
        ...this.headers,
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${options?.accessToken}`,
      },
      body: formData, // # ?
    };
  }

  /* ~~~ FOR MEDIA CR*D ~~~ */

  async saveMedia(media: any, blogNoteId: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/${blogNoteId}`,
        this.setOptions({
          method: 'POST',
          accessToken: Cookies.get('accessToken'),
          body: media,
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
