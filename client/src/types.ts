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
    contentType?: 'application/json' | 'multipart/form-data';
    accessToken?: string;
    body?: any;
}