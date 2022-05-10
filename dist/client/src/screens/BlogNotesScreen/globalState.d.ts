/// <reference types="react" />
import { BlogNote, BlogNotesMedia, Media } from '../../types';
export declare class GlobalState {
    client: any;
    _blogNotes: BlogNote[];
    _blogNotesMedia: BlogNotesMedia[];
    blogNoteInputs: {
        id: string;
        title: string;
        message: string;
        files: any[];
        deleteFiles: string;
    };
    constructor();
    initialise(): Promise<void>;
    set blogNotes(blogNotes: BlogNote[]);
    setBlogNotes(): Promise<void>;
    setMedia(): Promise<void>;
    get blogNotes(): BlogNote[];
    get getSortedBlogNotes(): BlogNote[];
    getOneBlogNoteMedia(blogNoteId: string): BlogNotesMedia | undefined;
    hasMedia(blogNoteId: string): boolean;
    setIdInput(id: string): string;
    emptyIdInput(): void;
    set titleInput(title: string);
    set messageInput(message: string);
    setFilesInput(convertedFiles: any): Promise<void>;
    set deleteFilesInput(deleteFiles: string);
    setDeleteFilesAll(blogNoteId: string): void;
    setDeleteFilesSeveral(originalFilename: string): void;
    saveBlogNote(): Promise<void>;
    fetchAllBlogNotes(): Promise<any>;
    fetchBlogNoteMedia(blogNoteId: string): Promise<Media[]>;
    fetchOneBlogNoteMedia(blogNoteId: string): Promise<string[]>;
    fetchOneMediaUrl(blogNoteId: string, mediaOriginalname: string): Promise<any>;
    updateBlogNote(): Promise<void>;
    deleteBlogNote(): Promise<void>;
}
export declare const GlobalStateContext: import("react").Context<GlobalState>;
export declare const GlobalStateProvider: import("react").Provider<GlobalState>;
export declare const useGlobalState: () => GlobalState;
