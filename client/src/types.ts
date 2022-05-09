export class User {
  username!: string;
  password!: string;
}

export class BlogNote {
  id!: string;
  date!: Date;
  title!: string;
  message!: string;
  userId?: string;
}

export class BlogNoteInput {
  id!: string;
  title!: string;
  message!: string;
  files?: any; // # need a profound typing
  deleteFiles?: string[];
}

export class Media {
  originalFilename!: string;
  url!: string;
}

export class BlogNotesMedia {
  blogNoteId!: string;
  media!: Media[];
}
