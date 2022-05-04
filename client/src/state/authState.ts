import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { User } from '../types';
import { apiClient } from '../api';
import Cookies from 'js-cookie';

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

  setUsername(username: string) {
    this.userInputs.username = username;
    // console.log(this.userInputs);
  }

  setPassword(password: string) {
    this.userInputs.password = password;
    // console.log(this.userInputs);
  }

  /* ~~~ REGISTER/LOGIN ~~~ */

  async registerUser() {
    this.username = await this.client.registerUser(this.userInputs);
  }

  async loginUser() {
    const accessToken = await this.client.loginUser(this.userInputs);
    
	  if (accessToken) Cookies.set('accessToken', accessToken);
  }

  /* ~~~ SET isAuthorised ~~~ */

  setAuthorised() {
    this.isAuthorised = true;
  }

}

export const AuthStateContext = createContext(new AuthState());
export const AuthStateProvider = AuthStateContext.Provider;

export const useAuthState = () => {
  return useContext(AuthStateContext);
};
