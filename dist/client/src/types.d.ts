export declare class User {
    username: string;
    password: string;
}
export declare class BlogNote {
    id: string;
    date: Date;
    title: string;
    message: string;
    userId?: string;
}
export declare class BlogNoteInput {
    id: string;
    title: string;
    message: string;
    files?: any;
    deleteFiles?: string;
}
export declare class BlogNoteInputWithoutId {
    title?: string;
    message?: string;
    files?: any;
    deleteFiles?: string;
}
export declare class Media {
    originalFilename: string;
    url: string;
}
export declare class BlogNotesMedia {
    blogNoteId: string;
    media: Media[];
}
