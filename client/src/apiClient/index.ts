import { User } from '../screens/types';
import Cookies from 'js-cookie';

export class apiClient {
  baseUrl: string = 'http://localhost:3001';
  isLoggedIn: boolean = false;

  // setToken(accessToken: string) {
  //   return {
  //     ...this.headers,
  // 		Authorization: `Bearer ${accessToken}`,
  //   };
  // 	// # should update this.headers instead
  // }

  async registerUser(newUser: User) {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newUser),
      };
      const endpoint = `${this.baseUrl}/auth/register/`;

      const response = await fetch(endpoint, options);
      // console.log('res original:', await response.json());
      const parsed = await response.json();
      console.log('res parsed:', parsed);
      return parsed;
    } catch (err) {
      console.log(err); // # need a better error handler
    }
  }

  async loginUser(user: User) {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
    //   headers.append('Authorization', `Bearer ${this.accessToken}`);
      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(user),
      };
      const endpoint = `${this.baseUrl}/auth/login/`;

      const response = await fetch(endpoint, options);
      // console.log('res original:', await response.json());
      const parsed = await response.json();
      console.log('res parsed:', parsed);

	  if (parsed?.accessToken) {
		console.log('if: ', parsed?.accessToken);
		Cookies.set('accesToken', parsed?.accessToken);
		this.isLoggedIn = true;
		console.log('if: ', this.isLoggedIn);
	  }

      return parsed;
    } catch (err) {
      console.log(err); // # need a better error handler
    }
  }

  getAuth() {
	return this.isLoggedIn;
  }
}
