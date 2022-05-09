export class BlogNote {
    id!: string;
    date!: Date;
    title!: string;
    message!: string;
    userId?: string;
    media?: any;
}

export class Media {
    id?: string;
    fileName?: string;
    blogNoteId?: string;
    url?: string;
}

export class User {
    username!: string;
    password!: string;
}

export class BlogNoteInput {
    id!: string;
    title!: string;
    message!: string;
    files?: any; // # need a profound typing
    deleteFiles?: any; // # need a profound typing
}
