import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { BlogNote } from './types';
import findAllJson from '../mockupData/findAll.json';

export class GlobalState {
    user: {
        username: string;
        password: string;
    } = {
        username: 'client1',
        password: 'pass1',
    };

    blogNotes: BlogNote[] = JSON.parse(JSON.stringify(findAllJson));

    constructor() {
        makeAutoObservable(this);
    }

    get getUsername() {
        return this.user.username;
    }

    get getBlogNotes() {
        return this.blogNotes;
    }
}

export const GlobalStateContext = createContext(new GlobalState());
export const GlobalStateProvider = GlobalStateContext.Provider;

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
}