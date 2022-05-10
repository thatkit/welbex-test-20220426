import { BlogNoteInput, BlogNoteInputWithoutId, User } from '../types';
export declare class apiClient {
    baseUrl: string;
    registerUser(newUser: User): Promise<any>;
    loginUser(user: User): Promise<any>;
    getUsername(): Promise<any>;
    saveBlogNote(blogNote: BlogNoteInput): Promise<any>;
    getBlogNotes(): Promise<any>;
    getBlogNoteMedia(blogNoteId: string): Promise<any>;
    getBlogNoteMediaUrl(blogNoteId: string, mediaOriginalname: string): Promise<any>;
    updateBlogNote(blogNote: BlogNoteInputWithoutId, blogNoteId: string): Promise<any>;
    deleteBlogNote(deleteFiles: string, blogNoteId: string): Promise<any>;
}
