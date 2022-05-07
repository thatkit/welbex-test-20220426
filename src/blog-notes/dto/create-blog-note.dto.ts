export class CreateBlogNoteDto {
  id: string;
  title: string;
  message: string;
  mediaRefs: string[];
  userId: string;
}

export class CreateBlogNoteFormDataDto {
  id: string;
  title: string;
  message: string;
}
