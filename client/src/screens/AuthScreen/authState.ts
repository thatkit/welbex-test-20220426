import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
import { User } from '../../types';
import { apiTextClient } from '../../api/textClient';

export class AuthState {
  client;
  isAuthorised: boolean = false;

  username: string | undefined = '';

  userInputs: User = {
    username: '',
    password: '',
  };

  constructor() {
    makeAutoObservable(this);
    this.client = new apiTextClient();
  }

  /* ~~~ FORM INPUT CONTROL ~~~ */

  setUsernameInput(username: string) {
    this.userInputs.username = username;
  }

  setPasswordInput(password: string) {
    this.userInputs.password = password;
  }

  /* ~~~ REGISTER/LOGIN ~~~ */

  async registerUser() {
    const response = await this.client.registerUser(this.userInputs);

    if (!response?.username) { // # should be more elegan
      this.setUnauthorised();
      return null;
    }

    await this.loginUser();
    this.username = response;
  }

  async loginUser() {
    const accessToken = await this.client.loginUser(this.userInputs);
    
	  if (accessToken?.accessToken) {
      Cookies.set('accessToken', accessToken?.accessToken);
      this.setAuthorised();
    }
  }

  async validateToken() {
    if (Cookies.get('accessToken')) {
      const response = await this.client.getUsername();

      if (response.username) {
        // console.log('this.setAuthorised();', response)
        this.setAuthorised();
        this.setUsername = response.username;
      }
    }
  }

  /* ~~~ SETTERS/GETTERS ~~~ */

  setAuthorised() {
    this.isAuthorised = true;
  }

  setUnauthorised() {
    this.isAuthorised = false;
  }

  set setUsername(username: string | undefined) {
    this.username = username;
  }

  get getUsername() {
    return this.username;
  }

}

export const AuthStateContext = createContext(new AuthState());
export const AuthStateProvider = AuthStateContext.Provider;

export const useAuthState = () => {
  return useContext(AuthStateContext);
};
