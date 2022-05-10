/// <reference types="react" />
import { User } from '../../types';
export declare class AuthState {
    client: any;
    isAuthorised: boolean;
    _username: string;
    userInputs: User;
    constructor();
    setUsernameInput(username: string): void;
    setPasswordInput(password: string): void;
    registerUser(): Promise<any>;
    loginUser(): Promise<void>;
    validateToken(): Promise<void>;
    setAuthorised(): void;
    setUnauthorised(): void;
    set username(username: string);
    get username(): string;
}
export declare const AuthStateContext: import("react").Context<AuthState>;
export declare const AuthStateProvider: import("react").Provider<AuthState>;
export declare const useAuthState: () => AuthState;
