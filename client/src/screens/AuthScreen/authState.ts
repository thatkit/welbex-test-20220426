import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
import { User } from '../../types';
import { apiClient } from '../../api';

export class AuthState {
  client;
  isAuthorised: boolean = false;

  _username: string = '';

  userInputs: User = {
    username: '',
    password: '',
  };

  constructor() {
    makeAutoObservable(this);
    this.client = new apiClient();
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

    if (!response?.username) { // # should be more elegant
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
      this.validateToken();
    }
  }

  async validateToken() {
    if (Cookies.get('accessToken')) {
      const response = await this.client.getUsername();

      if (response.username) {
        this.setAuthorised();
        this.username = response.username;
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

  set username(username: string) {
    this._username = username;
  }

  get username(): string {
    return this._username;
  }

}

export const AuthStateContext = createContext(new AuthState());
export const AuthStateProvider = AuthStateContext.Provider;

export const useAuthState = () => {
  return useContext(AuthStateContext);
};
