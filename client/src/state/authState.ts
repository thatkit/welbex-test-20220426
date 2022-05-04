import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
import { User } from '../types';
import { apiClient } from '../api';

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
    this.client = new apiClient();
  }

  /* ~~~ FORM INPUT CONTROL ~~~ */

  setUsernameInput(username: string) {
    this.userInputs.username = username;
    // console.log(this.userInputs);
  }

  setPasswordInput(password: string) {
    this.userInputs.password = password;
    // console.log(this.userInputs);
  }

  /* ~~~ REGISTER/LOGIN ~~~ */

  async registerUser() {
    this.username = await this.client.registerUser(this.userInputs);
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
      const username = await this.client.getUsername();
      this.setAuthorised();
      this.setUsername = username;
      // console.log('validateToken authState: ', this.setUsername);
    }
  }

  /* ~~~ SETTERS/GETTERS ~~~ */

  setAuthorised() {
    this.isAuthorised = true;
  }

  set setUsername(username: string) {
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
