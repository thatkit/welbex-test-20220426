export class CreateBlogNoteDto {
  id: string;
  title: string;
  message: string;
  mediaRefs: string[];
  userId: string;
}
