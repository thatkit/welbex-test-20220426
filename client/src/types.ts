export class BlogNote {
    id?: string;
    date!: Date;
    title!: string;
    message!: string;
    userId?: string;
    media?: Media[];
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

export class FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    accessToken?: string;
    body?: any;
}

export class BlogNoteInput {
    title!: string;
    message!: string;
    mediaRefs!: string[];
}
