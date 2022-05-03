import { User } from "../screens/types";

export class apiClient {
  baseUrl: string = 'http://localhost:3001';
	headers: Headers = new Headers();

  // setToken(accessToken: string) {
  //   return {
  //     ...this.headers,
	// 		Authorization: `Bearer ${accessToken}`,
  //   };
	// 	// # should update this.headers instead
  // }

	register = async (newUser: User) => {
		try {
			const headers = new Headers();
			headers.append('Content-Type', "application/json");
			const options = {
				method: 'POST',
				headers: headers,
				body: JSON.stringify({ username: `${Math.random()}`, password: `${Math.random()}` }),
			}
			const endpoint = `${this.baseUrl}/auth/register/`;
			// const request = new Request(endpoint, options);
			const response = await fetch(endpoint, options);
			// console.log('res original:', await response.json());
			const parsed = await response.json();
			console.log('res parsed:', parsed);
			return parsed;
		} catch(err) {
			console.log(err);
		}
	}

	clientTest(checkVal: any) {
		console.log('Test success:', checkVal);
	}
	async getHello() {
		const response = await fetch('http://localhost:3000');
		const parsed = await response.text();
		console.log(parsed);
	}
}
