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
    fileName!: string;
    blogNoteId!: string;
}